import styles from './styles.module.scss'

import { SignInButton } from '../SignButton'
import { ActiveLink } from '../ActiveLink'

export function Header() {
   

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src='/images/logo.svg' alt='ig.news' />
                <nav>
                    <ActiveLink activeClassName={styles.active} href='/'>
                        <a className={styles.active}>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href='/posts'>
                        <a>Post</a>
                    </ActiveLink>
                </nav>

                <SignInButton />
            </div>

        </header>
    )
}