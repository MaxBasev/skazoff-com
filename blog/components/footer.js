import { ImFacebook2,ImInstagram,ImTwitter } from "react-icons/im" 
import Link from 'next/link'
import Newsletter from './_child/newsletter'

export default function footer() {
    return(
        <footer className="bg-gray-50">
            <Newsletter></Newsletter>
            <div className="container mx-auto flex justify-center py-12">
                <div className="py-5">
                    <div className="flex gap-6 justify-center">
                        <Link href={"/"}>
                            <div><ImFacebook2 color="#888888"/></div>
                        </Link>
                        <Link href={"/"}>
                            <div><ImInstagram color="#888888"/></div>
                        </Link>
                        <Link href={"/"}>
                            <div><ImTwitter color="#888888"/></div>
                        </Link>
                    </div>

                    <p className="py-5 text-gray-400">Copyright ©2023 All rights reserved</p>
                    <p className="text-gray-400 text-center">Terms & Condition</p>
                </div>
            </div>

    </footer>
    )
}