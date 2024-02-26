import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

export default function signin({ providers }) {
    return (
        <div>
            <Header />
            <div className="flex justify-center space-x-7 mt-20">
                <img className="hidden object-cover rotate-6 md:inline-flex md:w-56" src="https://yaffa-cdn.s3.amazonaws.com/adnews/live/images/yafNews/featureImage/instagram-shopping-country-road1.png" alt="instagram-img" />
                <div className="">
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name} className="flex flex-col items-center">
                            <img className="w-32 object-cover" src="https://www.nftgators.com/wp-content/uploads/2022/03/Instagram-.jpg" alt="ins-icon" />
                            <p className="text-sm italic my-10 text-center text-red-300 font-bold">This app is created for learning purpose.</p>
                            <button onClick={()=> signIn(provider.id, {callbackUrl:"/"})} className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">Sign in with {provider.name}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const providers = await getProviders();
    return {
        props: { providers }
    };
}