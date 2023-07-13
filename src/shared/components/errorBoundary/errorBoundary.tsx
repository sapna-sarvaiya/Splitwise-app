import React from 'react';
import * as Sentry from '@sentry/browser';

interface IProps {
	children?: any;
}
class ErrorBoundary extends React.Component<IProps> {
	static getDerivedStateFromError(error: Error | null) {
		return { error };
	}

	state = {
		error: null
	};

	componentDidMount() {
		//window.onerror = this.logError;
	}

	componentDidCatch(error: Error | null, info: any) {
		this.logError(error);
		Sentry.withScope((scope) => {
			Object.keys(info).forEach((key: any) => {
				scope.setExtra(key, info[key]);
			});
			Sentry.captureException(error);
		});
	}

	render() {
		if (this.state.error) {
			return 'System is updating. Please hold on.';
			//comment out below code when you need crash reports from user by Sentry
			// return (
			// 	<div
			// 		className="height--full flex justify-content-center align-items--center flex--column mt--48
			// 	"
			// 	>
			// 		<p className="font--bold text--primary mb--20 text--center">
			// 			Oops! System are being updating . please report your feedback by clicking on below button
			// 		</p>
			// 		<button className="btn btn--primary-300" onClick={() => Sentry.showReportDialog()}>
			// 			Report feedback
			// 		</button>
			// 	</div>
			// );
		}
		return this.props.children;
	}

	logError(args: Error | null) {
		console.log(args);
	}
}

export default ErrorBoundary;
