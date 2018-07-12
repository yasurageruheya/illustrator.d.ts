/**
 * A preset document template to use when creating a new document. See {@link Documents#addDocument}.
 *
 * @since CS3
 * @version CS3
 *
 * <b>Properties</b>
 * ･ {@link colorMode}
 * ･ {@link height}
 * ･ {@link previewMode}
 * ･ {@link rasterResolution}
 * ･ {@link title}
 * ･ {@link transparencyGrid}
 * ･ {@link typename}
 * ･ {@link units}
 * ･ {@link width}
 *
 * <b>Methods</b>
 */
declare class DocumentPreset
{
	/**
	 * The color space for the new document.
	 * @type {DocumentColorSpace}
	 * @see {@link DocumentPreset}
	 * @since CS3
	 * @version CS3
	 */
	colorMode:DocumentColorSpace;

	/**
	 * The height in document points. Default: 792.0
	 * @type {Number} double
	 * @see {@link DocumentPreset}
	 * @since CS3
	 * @version CS3
	 */
	height:Number;

	/**
	 * The preview mode for the new document.
	 * @type {DocumentPreviewMode}
	 * @see {@link DocumentPreset}
	 * @since CS3
	 * @version CS3
	 */
	previewMode:DocumentPreviewMode;

	/**
	 * The raster resolution for the new document.
	 * @type {DocumentRasterResolution}
	 * @see {@link DocumentPreset}
	 * @since CS3
	 * @version CS3
	 */
	rasterResolution:DocumentRasterResolution;

	/**
	 * The document title.
	 * @type {String}
	 * @see {@link DocumentPreset}
	 * @since CS3
	 * @version CS3
	 */
	title:String;

	/**
	 * The transparency grid color for the new document.
	 * @type {DocumentTransparencyGrid}
	 * @see {@link DocumentPreset}
	 * @since CS3
	 * @version CS3
	 */
	transparencyGrid:DocumentTransparencyGrid;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link DocumentPreset}
	 * @since CS3
	 * @version CS3
	 */
	readonly typename:String;

	/**
	 * The ruler units for the new document.
	 * @type {RulerUnits}
	 * @see {@link DocumentPreset}
	 * @since CS3
	 * @version CS3
	 */
	units:RulerUnits;

	/**
	 * The width in document points. Default: 612.0
	 * @type {Number} double
	 * @see {@link DocumentPreset}
	 * @since CS3
	 * @version CS3
	 */
	width:Number;
}