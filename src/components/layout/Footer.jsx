import { BsGithub, BsLinkedin } from 'react-icons/bs';

function Footer() {
    return(
        <div className='text-[var(--color-text)] bg-[var(--color-background)] px-6 text-md'>
            <div className="border-t border-blue-400 w-full max-w-[960px] mx-auto"/>
            <footer className="h-auto py-6 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 max-w-[960px] mx-auto w-full">
                 <div className='flex gap-4 items-center'>
                <p>Contact me: </p>
                    <a  href='https://github.com/victorrgodoy' 
                        target='_blank' 
                        rel="noopener noreferrer nofollow"  
                        className='cursor:auto hover:scale-110 text-2xl'
                    >
                    <BsGithub/>
                    </a>
                    <a  href='https://www.linkedin.com/in/victorgodoy-/' 
                        target='_blank' 
                        rel="noopener noreferrer nofollow"
                        className="cursor:auto hover:scale-110 text-2xl"
                    >
                    <BsLinkedin/>
                    </a>
                    </div>
                    <p>Copyright © 2025 | All rights reserved.</p>
            </footer>
        </div>
    )
}
export default Footer