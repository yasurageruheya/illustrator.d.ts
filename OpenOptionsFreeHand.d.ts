/**
 * Options for opening a FreeHand file.
 *
 * @since CS5
 * @version CS5
 *
 * <b>Properties</b>
 * ･ {@link convertTextToOutlines}
 * ･ {@link importSinglePage}
 * ･ {@link pageToOpen}
 * ･ {@link parent}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 */
declare class OpenOptionsFreeHand extends OpenOptions
{
	/**
	 * If <b>true</b>, all text is converted to vector paths; preserves the visual appearance of type. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link OpenOptionsFreeHand}
	 * @since CS5
	 * @version CS5
	 */
	convertTextToOutlines:Boolean;

	/**
	 * If <b>true</b>, imports only the page specified in the {@link pageToOpen} property. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link OpenOptionsFreeHand}
	 * @since CS5
	 * @version CS5
	 */
	importSinglePage:Boolean;

	/**
	 * The number of the page to import when opening a multipage document. Valid only when {@link importSinglePage} is <b>true</b>.
	 * @type {Number} long
	 * @see {@link OpenOptionsFreeHand}
	 * @since CS5
	 * @version CS5
	 */
	pageToOpen:Number;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Object}
	 * @see {@link OpenOptionsFreeHand}
	 * @since CS5
	 * @version CS5
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link OpenOptionsFreeHand}
	 * @since CS5
	 * @version CS5
	 */
	readonly typename:String;
}