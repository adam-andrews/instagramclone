import React from 'react';
import Image from 'next/image';

function Header() {
	return (
		<div>
			<div className="flex justify-between max-w-6xl  bg-white ">
				<div className="relative  hidden lg:inline-grid h-24 w-24">
					{/* Left */}
					<Image
						src="https://links.papareact.com/ocw"
						layout="fill"
						objectFit="contain"
					/>
				</div>
				<div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
					<Image
						src="https://links.papareact.com/jjm"
						layout="fill"
						objectFit="contain"
					/>
				</div>
                {/* Middle */}

				<div>
					<div></div>
					<input type="text" placeholder="search"></input>
				</div>
			</div>
			

			{/* Right */}
		</div>
	);
}

export default Header;
