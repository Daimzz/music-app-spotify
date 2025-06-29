import {Link} from "react-router-dom";
import {LayoutDashboardIcon} from "lucide-react";
import {SignedOut,UserButton} from "@clerk/clerk-react";
import SignInOAuthButtons from "@/components/SignInOAuthButtons.tsx";
import {useAuthStore} from "@/stores/useAuthStore.ts";
import {cn} from "@/lib/utils.ts";
import {buttonVariants} from "@/components/ui/button.tsx";

const Topbar = () => {
    const {isAdmin} = useAuthStore()

    return (
        <div className={"flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-50"}>
            <div className={'flex gap-2 items-center'}>
                <img src="/spotify.png" className={'size-8'} alt=""/>
                MusicApp
            </div>
            <div className={'flex gap-4 items-center'}>
                {isAdmin && (
                    <Link to={'/admin'} className={cn(buttonVariants({ variant: 'outline' }))}>
                        <LayoutDashboardIcon className={'size-4 mr-2'}/>
                        Admin Dashboard
                    </Link>
                )}

                <SignedOut>
                    <SignInOAuthButtons/>
                </SignedOut>

                <UserButton/>
            </div>
        </div>
    );
};

export default Topbar;