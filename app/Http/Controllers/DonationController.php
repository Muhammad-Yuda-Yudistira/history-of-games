<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Donation;

class DonationController extends Controller
{
    public function index() {
        return Inertia::render('Donation/Index', [
            'titlePage' => 'Donation'
        ]);
    }

    public function store(Request $request) {
        $validatedData = $request->validate([
            'name' => 'required|string|min:1|max:255',
            'nominal' => 'required|string',
            'phone' => 'required|string',
            'email' => 'required|string',
            'featureReq' => 'string|max:255'
        ]);

        $validatedData['nominal'] = intval(str_replace('.', '', $validatedData['nominal']));

        $post = Donation::create($validatedData);

        return redirect('donation')->with('message', 'Silahkan menunggu contact dari admin untuk link pembayar, terima kasih!');
    }
}
