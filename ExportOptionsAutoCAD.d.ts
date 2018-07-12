/**
 * Options for exporting a document as an AutoCAD file, used with the {@link Document#exportFile} method. All properties are optional.
 * When you export a document, a file extension is appended automatically. You should not include any file extension in the file specification. To override the default AutoCAD export format (DWG), use the {@link exportFileFormat} property.
 *
 * @since CS3
 * @version CS3
 *
 * <b>Properties</b>
 * ･ {@link alterPathsForAppearance}
 * ･ {@link colors}
 * ･ {@link convertTextToOutlines}
 * ･ {@link exportFileFormat}
 * ･ {@link exportOption}
 * ･ {@link exportSelectedArtOnly}
 * ･ {@link rasterFormat}
 * ･ {@link scaleLineweights}
 * ･ {@link typename}
 * ･ {@link unit}
 * ･ {@link unitScaleRatio}
 * ･ {@link version}
 *
 * <b>Methods</b>
 */
declare class ExportOptionsAutoCAD
{
	/**
	 * If <b>true</b>, paths are altered if needed to maintain appearance. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsAutoCAD}
	 * @since CS3
	 * @version CS3
	 */
	alterPathsForAppearance:Boolean;

	/**
	 * The colors exported into the AutoCAD file.
	 * @type {AutoCADColors}
	 * @see {@link ExportOptionsAutoCAD}
	 * @since CS3
	 * @version CS3
	 */
	colors:AutoCADColors;

	/**
	 * If <b>true</b>, text is converted to vector paths; preserves the visual appearance of type. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsAutoCAD}
	 * @since CS3
	 * @version CS3
	 */
	convertTextToOutlines:Boolean;

	/**
	 * The format to which the file is exported. Default: {@link AutoCADExportFileFormat.DWG}
	 * @type {AutoCADExportFileFormat}
	 * @see {@link ExportOptionsAutoCAD}
	 * @since CS3
	 * @version CS3
	 */
	exportFileFormat:AutoCADExportFileFormat;

	/**
	 * Specifies whether to preserve appearance or editability during export. Default: {@link AutoCADExportOption.MaximizeEditability}
	 * @type {AutoCADExportOption}
	 * @see {@link ExportOptionsAutoCAD}
	 * @since CS3
	 * @version CS3
	 */
	exportOption:AutoCADExportOption;

	/**
	 * If <b>true</b>, only selected artwork is exported. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsAutoCAD}
	 * @since CS3
	 * @version CS3
	 */
	exportSelectedArtOnly:Boolean;

	/**
	 * The format in which raster art is exported.
	 * @type {AutoCADRasterFormat}
	 * @see {@link ExportOptionsAutoCAD}
	 * @since CS3
	 * @version CS3
	 */
	rasterFormat:AutoCADRasterFormat;

	/**
	 * If <b>true</b>, line weights are scaled by the same scaling factor as the rest of the drawing. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsAutoCAD}
	 * @since CS3
	 * @version CS3
	 */
	scaleLineweights:Boolean;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link ExportOptionsAutoCAD}
	 * @since CS3
	 * @version CS3
	 */
	readonly typename:String;

	/**
	 * The measurement units from which to map.
	 * @type {AutoCADUnit}
	 * @see {@link ExportOptionsAutoCAD}
	 * @since CS3
	 * @version CS3
	 */
	unit:AutoCADUnit;

	/**
	 * The ratio (as a percentage) by which output is scaled. Range: <b>0 to 1000</b>
	 * @type {Number} double
	 * @see {@link ExportOptionsAutoCAD}
	 * @since CS3
	 * @version CS3
	 */
	unitScaleRatio:Number;

	/**
	 * The release of AutoCAD to which the file is exported. Default: {@link AutoCADCompatibility.AutoCADRelease24}
	 * @type {AutoCADCompatibility}
	 * @see {@link ExportOptionsAutoCAD}
	 * @since CS3
	 * @version CS3
	 */
	version:AutoCADCompatibility;
}