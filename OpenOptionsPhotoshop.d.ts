/**
 * Options for opening a Photoshop document, used with the {@link Application#open} method.
 *
 * @since CS3
 * @version CS3
 *
 * <b>Properties</b>
 * ･ {@link layerComp}
 * ･ {@link preserveHiddenLayers}
 * ･ {@link preserveImageMaps}
 * ･ {@link preserveLayers}
 * ･ {@link preserveSlices}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 */
declare class OpenOptionsPhotoshop extends OpenOptions
{
	/**
	 * The name of the layer comp to use when the document is converted.
	 * @type {String}
	 * @see {@link OpenOptionsPhotoshop}
	 * @since CS3
	 * @version CS3
	 */
	layerComp:String;

	/**
	 * If <b>true</b>, preserve hidden layers when the document is converted. Default: <b>false</b>.
	 * @type {Boolean}
	 * @see {@link OpenOptionsPhotoshop}
	 * @since CS3
	 * @version CS3
	 */
	preserveHiddenLayers:Boolean;

	/**
	 * If <b>true</b>, preserve image maps when the document is converted. Default: <b>true</b>.
	 * @type {Boolean}
	 * @see {@link OpenOptionsPhotoshop}
	 * @since CS3
	 * @version CS3
	 */
	preserveImageMaps:Boolean;

	/**
	 * If <b>true</b>, preserve layers when the document is converted. Default: <b>true</b>.
	 * @type {Boolean}
	 * @see {@link OpenOptionsPhotoshop}
	 * @since CS3
	 * @version CS3
	 */
	preserveLayers:Boolean;

	/**
	 * If <b>true</b>, preserve slices when the document is converted. Default: <b>true</b>.
	 * @type {Boolean}
	 * @see {@link OpenOptionsPhotoshop}
	 * @since CS3
	 * @version CS3
	 */
	preserveSlices:Boolean;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link OpenOptionsPhotoshop}
	 * @since CS3
	 * @version CS3
	 */
	readonly typename:String;
}