import dynamic from 'next/dynamic';

const withNoSSR = (Component) =>
	dynamic(() => Promise.resolve(Component), { ssr: false });

export default withNoSSR;
