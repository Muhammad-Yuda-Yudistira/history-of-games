# Use the official PHP image with Composer installed
FROM composer:2.1 as composer

# Set the working directory
WORKDIR /app

# Copy the composer files
COPY composer.json composer.lock ./

# Install composer dependencies
RUN composer install --prefer-dist --no-dev --no-scripts --no-progress --no-suggest

# Use the official PHP image
FROM php:8.1-fpm

# Set the working directory
WORKDIR /var/www

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libssl-dev \
    zip \
    unzip \
    git \
    && docker-php-ext-install pdo_mysql

# Copy the application files
COPY . .

# Copy the composer dependencies from the composer stage
COPY --from=composer /app/vendor ./vendor

# Copy the entrypoint script and make it executable
COPY ./docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Set the entrypoint script
ENTRYPOINT ["docker-entrypoint.sh"]

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]
