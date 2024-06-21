#!/bin/sh

# Run database migrations
php artisan migrate --force

# Start the PHP-FPM server
php-fpm
