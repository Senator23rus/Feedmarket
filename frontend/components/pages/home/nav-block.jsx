import React from 'react';
import Image from 'next/image';
import CustomLink from 'UI/custom-link';

const NavBlock = () => {
	return (
		<div className="home-nav-block">
			<div className={'home-nav-block_item'}>
				<Image
					src={'/nav-block/bird.png'}
					layout={'fill'}
					objectFit={'fill'}
					alt={'poetry'}
				/>
				<div className={'title'}>
					<span className={'label'}>Птицеводство</span>
					<div className={'links'}>
						<CustomLink
							href={{
								pathname: '/catalog',
								query: { category: 'poetry', type: 'Комбикорм' },
							}}>
							Комбикорм
						</CustomLink>
						<CustomLink
							href={{
								pathname: '/catalog',
								query: { category: 'poetry', type: 'Премикс' },
							}}>
							Премикс
						</CustomLink>
						<CustomLink
							href={{
								pathname: '/catalog',
								query: { category: 'poetry', type: 'БВМК' },
							}}>
							БВМК
						</CustomLink>
					</div>
				</div>
				<div className="placeholder">Птицеводство</div>
			</div>
			<div className={'home-nav-block_item'}>
				<Image
					src={'/nav-block/pig.png'}
					layout={'fill'}
					objectFit={'fill'}
					alt={'pig'}
				/>
				<div className={'title'}>
					<span className={'label'}>Свиноводство</span>
					<div className={'links'}>
						<CustomLink
							href={{
								pathname: '/catalog',
								query: { category: 'pig', type: 'Комбикорм' },
							}}>
							Комбикорм
						</CustomLink>
						<CustomLink
							href={{
								pathname: '/catalog',
								query: { category: 'pig', type: 'Премикс' },
							}}>
							Премикс
						</CustomLink>
						<CustomLink
							href={{ pathname: '/catalog', query: { category: 'pig', type: 'БВМК' } }}>
							БВМК
						</CustomLink>
					</div>
				</div>
				<div className="placeholder">Свиноводство</div>
			</div>
			<div className={'home-nav-block_item'}>
				<Image
					src={'/nav-block/krs.png'}
					layout={'fill'}
					objectFit={'fill'}
					alt={'cattle'}
				/>
				<div className={'title'}>
					<span className={'label'}>Крупный Рогатый Скот</span>
					<div className={'links'}>
						<CustomLink
							href={{
								pathname: '/catalog',
								query: { category: 'cattle', type: 'Комбикорм' },
							}}>
							Комбикорм
						</CustomLink>
						<CustomLink
							href={{
								pathname: '/catalog',
								query: { category: 'cattle', type: 'Премикс' },
							}}>
							Премикс
						</CustomLink>
						<CustomLink
							href={{
								pathname: '/catalog',
								query: { category: 'cattle', type: 'БВМК' },
							}}>
							БВМК
						</CustomLink>
					</div>
				</div>
				<div className="placeholder">Крупный Рогатый Скот</div>
			</div>
		</div>
	);
};

export default NavBlock;
