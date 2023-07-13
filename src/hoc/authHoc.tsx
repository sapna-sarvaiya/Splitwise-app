import React from 'react';

import loginCover from 'assets/images/login-cover.jpg';
import nextEdgeLogo from 'assets/images/next-edge-logo.png';
import reelAnalyticsLogo from 'assets/images/reel-analytics-logo.png';

const AuthHoc: React.FC<React.PropsWithChildren> = (props) => {
	return (
		<div className='login flex width--full height--full-viewport overflow--hidden'>
			<div className='login-cover width--60'>
				<img
					className='login-cover_img width--full height--full object-fit--cover object-position--right'
					src={loginCover}
					alt='/loginCover'
				/>
			</div>
			<div className='login-form width--40 m--auto'>
				<div className='width--80 m--0-auto'>
					<div className='logo-wrapper flex justify-content--between align-items--center'>
						<div className='logo-item mr--20'>
							<img className='logo' src={nextEdgeLogo} alt='/next-edge-logo' />
						</div>
						<div className='logo-item'>
							<img className='logo' src={reelAnalyticsLogo} alt='/reel-analytics-logo' />
						</div>
					</div>
					{props.children}
				</div>
			</div>
		</div>
	);
};

export default AuthHoc;
