const EmptyDataContainer = (props: { text: string }) => (
	<div className='flex align-items--center mt--30 mb--30 justify-content--center'>
		<p className='text--primary font--medium font-size--24 text--center '>{props.text}</p>
	</div>
);

export default EmptyDataContainer;
