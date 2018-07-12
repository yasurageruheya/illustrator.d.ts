/**
 * A preset document template to use when creating a new document. See {@link Documents#addDocument}.
 *
 * @since CS3
 * @version CC2017
 *
 * <b>Properties</b>
 * ･ {@link artboardLayout}
 * ･ {@link artboardRowsOrCols}
 * ･ {@link artboardSpacing}
 * ･ {@link colorMode}
 * ･ {@link documentBleedLink}
 * ･ {@link documentBleedOffsetRect}
 * ･ {@link height}
 * ･ {@link numArtboards}
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
	 * The layout of artboards in the new document. Default: {@link DocumentArtboardLayout.GridByRow}
	 * @type {DocumentArtboardLayout}
	 * @see {@link DocumentPreset}
	 * @since CS4
	 * @version CS4
	 */
	artboardLayout:DocumentArtboardLayout;

	/**
	 * The number of rows (for rows layout) or columns (for column layout) of artboards. Range: 1 to ({@link numArtboards} - 1) or 1 for single row or column layouts. Default: <b>1</b>
	 * @type {Number} long
	 * @see {@link DocumentPreset}
	 * @since CS4
	 * @version CS4
	 */
	artboardRowsOrCols:Number;

	/**
	 * The spacing between artboards in the new document. Default: <b>20.0</b>
	 * @type {Number} double
	 * @see {@link DocumentPreset}
	 * @since CS4
	 * @version CS4
	 */
	artboardSpacing:Number;

	/**
	 * The color space for the new document.
	 * @type {DocumentColorSpace}
	 * @see {@link DocumentPreset}
	 * @since CS3
	 * @version CS3
	 */
	colorMode:DocumentColorSpace;

	/**
	 * The document link for bleed values.
	 * @type {Boolean}
	 * @see {@link DocumentPreset}
	 * @since CC2017
	 * @version CC2017
	 */
	documentBleedLink:Boolean;

	/**
	 * The document bleed offset rectangle.
	 * @type {Number[]} rectangle. array of 4 numbers
	 * @see {@link DocumentPreset}
	 * @since CC2017
	 * @version CC2017
	 */
	documentBleedOffsetRect:Number[];

	/**
	 * The height in document points. Default: <b>792.0</b>.
	 * @type {Number} double
	 * @see {@link DocumentPreset}
	 * @since CS3
	 * @version CS3
	 */
	height:Number;

	/**
	 * The number of artboards for the new document. Range: <b>1 to 100</b>. Default: <b>1</b>
	 * @type {Number} long
	 * @see {@link DocumentPreset}
	 * @since CS3
	 * @version CS3
	 */
	numArtboards:Number;

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
	 * The width in document points. Default: <b>612.0</b>.
	 * @type {Number} double
	 * @see {@link DocumentPreset}
	 * @since CS3
	 * @version CS3
	 */
	width:Number;
}