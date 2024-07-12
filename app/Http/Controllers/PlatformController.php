<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Platform;

class PlatformController extends Controller
{
    public function show (Request $request) {
        // $geneActive = $request->input('active') ?? 1;
        // $platforms = Platform::where('generation', $geneActive)->get();
        $platforms = Platform::get();
        
        return Inertia::render('Platform/Index', [
            'titlePage' => 'Platform',
            'platforms' => $platforms,
        ]);
    }
}
