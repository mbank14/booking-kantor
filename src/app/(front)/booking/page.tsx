'use client'
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";

export default function Booking() {
    const data: string[] = [];

    const router = useRouter();
    if (data.length === 0) {
        router.push('/');
    }

    return (
        <div className="min-h-screen">
            <div className="px-5">
                {data.length === 0 ? (
                    <div>Hmmmm ... !</div>
                ): (
                    <div className="grid grid-cols-[2fr_1fr] gap-5">
                        <div className="bg-base-300 min-h-[30vh] rounded-box">
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-4">Booking Details</h2>
                                <form>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="label">Full Name</label>
                                            <input type="text" className="input input-bordered w-full" />
                                        </div>
                                        <div>
                                            <label className="label">Email</label>
                                            <input type="email" className="input input-bordered w-full" />
                                        </div>
                                        <div>
                                            <label className="label">Payment Method</label>
                                            <select className="select select-bordered w-full">
                                                <option value="">Select payment method</option>
                                                <option value="bank">Bank Transfer</option>
                                                <option value="qris">QRIS</option>
                                            </select>
                                        </div>
                                        <button type="submit" className="btn btn-primary w-full">
                                            Continue to Payment
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div>
                            <div className="bg-white min-h-[30vh] rounded-box p-4">
                                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <span>Workspace Regular (2 hours)</span>
                                        <span>Rp 50.000</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Additional Service</span>
                                        <span>Rp 15.000</span>
                                    </div>
                                    <div className="divider my-2"></div>
                                    <div>
                                        <label className="label">Coupon Code</label>
                                        <div className="flex gap-2">
                                            <input type="text" className="input input-bordered flex-1" placeholder="Enter coupon code" />
                                            <button className="btn btn-primary">Apply</button>
                                        </div>
                                    </div>
                                    <div className="divider my-2"></div>
                                    <div className="flex justify-between font-bold">
                                        <span>Total</span>
                                        <span>Rp 65.000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
};
