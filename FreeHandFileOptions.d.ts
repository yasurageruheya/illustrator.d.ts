/**
 * Options for opening a FreeHand file.
 *
 * @since CS3
 * @version CS3
 *
 * <b>Properties</b>
 * ･ {@link convertTextToOutlines}
 * ･ {@link importSinglePage}
 * ･ {@link pageToOpen}
 *
 * <b>Methods</b>
 */
declare class FreeHandFileOptions
{
	/**
	 * If <b>true</b>, all text is converted to vector paths; preserves the visual appearance of type. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link FreeHandFileOptions}
	 * @since CS3
	 * @version CS3
	 */
	convertTextToOutlines:Boolean;

	/**
	 * If <b>true</b>, imports only the page specified in the {@link pageToOpen} property. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link FreeHandFileOptions}
	 * @since CS3
	 * @version CS3
	 */
	importSinglePage:Boolean;

	/**
	 * The number of the page to import when opening a multipage document. Valid only when {@link importSinglePage} is <b>true</b>.
	 * @type {Number} long
	 * @see {@link FreeHandFileOptions}
	 * @since CS3
	 * @version CS3
	 */
	pageToOpen:Number;
}