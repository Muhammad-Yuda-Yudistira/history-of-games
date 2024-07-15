<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Generation;

class GenerationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Generation::create([
            'title' => 'First',
            'generation' => 1,
            'label' => 'border-yellow-400',
        ]);

        Generation::create([
            'title' => 'Second',
            'generation' => 2,
            'label' => 'border-lime-400',
        ]);

        Generation::create([
            'title' => 'Third',
            'generation' => 3,
            'label' => 'border-red-400',
        ]);

        Generation::create([
            'title' => 'forth',
            'generation' => 4,
            'label' => 'border-stone-400',
        ]);

        Generation::create([
            'title' => 'fifth',
            'generation' => 5,
            'label' => 'border-indigo-400',
        ]);

        Generation::create([
            'title' => 'sixth',
            'generation' => 6,
            'label' => 'border-black',
        ]);

        Generation::create([
            'title' => 'seventh',
            'generation' => 7,
            'label' => 'border-blue-400',
        ]);

        Generation::create([
            'title' => 'eightth',
            'generation' => 8,
            'label' => 'border-rose-400',
        ]);

        Generation::create([
            'title' => 'nineth',
            'generation' => 9,
            'label' => 'border-gray-400',
        ]);
    }
}
