<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Platform;

class PlatformController extends Controller
{
    public function show (Request $request) {
        $platforms = Platform::with('generation')->get();
        
        return Inertia::render('Platform/Index', [
            'titlePage' => 'Platform',
            'platforms' => $platforms,
        ]);
    }
}
