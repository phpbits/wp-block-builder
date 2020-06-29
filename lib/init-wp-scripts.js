
/**
 * External dependencies
 */
const { command } = require( 'execa' );
const { join } = require( 'path' );

/**
 * Internal dependencies
 */
const { info } = require( './log' );

module.exports = async function( {
	slug,
} ) {
	const cwd = join( process.cwd(), slug );

	info( '' );
	info( 'Installing packages. It might take a couple of minutes.' );
	await command( 'npm install', {
		cwd,
	} );

	info( '' );
	info( 'Compiling block.' );
	await command( 'npm run build', {
		cwd,
	} );
};