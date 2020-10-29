import React from 'react';
import { Link } from 'gatsby';

import styles from './header.module.css';

const MENU = [
	{ name: 'home', url: '/' },
	{ name: 'works', url: '/work' },
	{ name: 'blog', url: '/blog' },
	{ name: 'photos', url: '/photos' },
	{ name: 'contact', url: '/contact' },
];

const Header = () => (
	<header className={styles.header}>
		<div className='container'>
			<div className={styles.wrapper}>
				<div className={styles.logo}>
					<Link to='/'>
						<img src={'/avatar.svg'} alt='avatar' />
					</Link>
				</div>
				<nav className={styles.nav}>
					{MENU.map((page) => {
						return (
							<Link key={page.url} to={page.url} className={styles.link}>
								{page.name}
							</Link>
						);
					})}
				</nav>
			</div>
		</div>
	</header>
);

export default Header;
