import { Activity, DraftingCompass, Mail, Zap } from 'lucide-react'
import Image from 'next/image'

export default function FeaturesSection5() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-4xl font-semibold lg:text-5xl">How to Start Your YouTube Journey</h2>
                            <p className="mt-6">Pick your niche, plan your content, and set clear goals — small steps compound fast.</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li>
                                <Mail className="size-5" />
                                Choose your niche

                            </li>
                            <li>
                                <Zap className="size-5" />
                                 Get your gear
                            </li>
                            <li>
                                <Activity className="size-5" />
                                ️Set up & record
                            </li>
                            <li>
                                <DraftingCompass className="size-5" />
                                Upload & optimize

                            </li>
                        </ul>
                    </div>
                    <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3 overflow-hidden">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1747572939295-209569c4eec6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="hidden rounded-[15px] dark:block" alt="payments illustration dark" width={1207} height={929} />
                            <Image src="/payments-light.png" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1207} height={929} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
