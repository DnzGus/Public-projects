import Instagram from '../IMGS/Instagram.png'
import Twitter from '../IMGS/Twitter.png'
import Linkedin from '../IMGS/Linkedin.png'

const Footer = () => {
    return (
        <footer className='sticky bottom-0 bg-sky-950 p-2 flex items-center justify-between flex-wrap m-0 text-yellow-300'>
            <div className='flex flex-row items-center align-middle gap-2'>
                <p>Nossas redes sociais:</p>
                <div className='flex justify-evenly gap-1'>
                    <a href='https://www.bing.com/ck/a?!&&p=2435727bc8cb6a96JmltdHM9MTY4ODc3NDQwMCZpZ3VpZD0wMjg3NzVjYS0zY2U1LTZiOTYtMmE3Yy02NmQ2M2Q5YzZhMjEmaW5zaWQ9NTQ0MA&ptn=3&hsh=3&fclid=028775ca-3ce5-6b96-2a7c-66d63d9c6a21&psq=instagram+login&u=a1aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9leHBsb3JlLw&ntb=1' rel='noreferrer' target='_blank'>
                        <img src={Instagram} alt='Instagram Logo' className='h-5'/>
                    </a>
                    <a href='https://www.bing.com/ck/a?!&&p=d55898e2599e71bbJmltdHM9MTY4ODc3NDQwMCZpZ3VpZD0wMjg3NzVjYS0zY2U1LTZiOTYtMmE3Yy02NmQ2M2Q5YzZhMjEmaW5zaWQ9NTE4NQ&ptn=3&hsh=3&fclid=028775ca-3ce5-6b96-2a7c-66d63d9c6a21&psq=twitter+login&u=a1aHR0cHM6Ly90d2l0dGVyLmNvbS9sb2dpbg&ntb=1' rel='noreferrer' target='_blank'>
                        <img src={Twitter} alt='Twitter Logo' className='h-5'/>
                    </a>
                    <a href='https://www.bing.com/ck/a?!&&p=2435727bc8cb6a96JmltdHM9MTY4ODc3NDQwMCZpZ3VpZD0wMjg3NzVjYS0zY2U1LTZiOTYtMmE3Yy02NmQ2M2Q5YzZhMjEmaW5zaWQ9NTQ0MA&ptn=3&hsh=3&fclid=028775ca-3ce5-6b96-2a7c-66d63d9c6a21&psq=instagram+login&u=a1aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9leHBsb3JlLw&ntb=1' rel='noreferrer' target='_blank'>
                        <img src={Linkedin} alt='Instagram Logo' className='h-5'/>
                    </a>
                </div>
            </div>
            <div className='flex text-blue-400 font-extrabold'>
                <a href='https://www.bing.com/ck/a?!&&p=e2abbeb148b900bdJmltdHM9MTY4ODc3NDQwMCZpZ3VpZD0wMjg3NzVjYS0zY2U1LTZiOTYtMmE3Yy02NmQ2M2Q5YzZhMjEmaW5zaWQ9NTE4OQ&ptn=3&hsh=3&fclid=028775ca-3ce5-6b96-2a7c-66d63d9c6a21&psq=google+maps&u=a1aHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20uYnIv&ntb=1'
                rel='noreferrer' target='_blank'>
                    Encontre-nos aqui!
                </a>
            </div>
        </footer>
    )
}


export default Footer