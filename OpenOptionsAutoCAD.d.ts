/**
 * Options for opening an AutoCAD drawing, used with the {@link Application#open} method.
 *
 * @since CS3
 * @version CS5
 *
 * <b>Properties</b>
 * ･ {@link centerArtwork}
 * ･ {@link globalScaleOption}
 * ･ {@link globalScalePercent}
 * ･ {@link mergeLayers}
 * ･ {@link parent}
 * ･ {@link scaleLineweights}
 * ･ {@link selectedLayoutName}
 * ･ {@link typename}
 * ･ {@link unit}
 * ･ {@link unitScaleRatio}
 *
 * <b>Methods</b>
 */
declare class OpenOptionsAutoCAD extends OpenOptions
{
	/**
	 * If <b>true</b>, the artwork is centered on the artboard. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link OpenOptionsAutoCAD}
	 * @since CS3
	 * @version CS3
	 */
	centerArtwork:Boolean;

	/**
	 * How to scale the drawing on import. Default: {@link AutoCADGlobalScaleOption.FitArtboard}
	 * @type {AutoCADGlobalScaleOption}
	 * @see {@link OpenOptionsAutoCAD}
	 * @since CS3
	 * @version CS3
	 */
	globalScaleOption:AutoCADGlobalScaleOption;

	/**
	 * The value when {@link globalScaleOption} is {@link AutoCADGlobalScaleOption.ScaleByValue}, expressed as a percentage. Range: <b>0.0 to 100.0</b>. Default is <b>100.0</b>
	 * @type {Number} double
	 * @see {@link OpenOptionsAutoCAD}
	 * @since CS3
	 * @version CS3
	 */
	globalScalePercent:Number;

	/**
	 * If <b>true</b>, the layers of the artwork are merged. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link OpenOptionsAutoCAD}
	 * @since CS4
	 * @version CS4
	 */
	mergeLayers:Boolean;

	/**
	 * Read-only. The object’s container.
	 * @const
	 * @type {Object}
	 * @see {@link OpenOptionsAutoCAD}
	 * @since CS5
	 * @version CS5
	 */
	readonly parent:Object;

	/**
	 * If <b>true</b>, line weights are scaled by the same factor as the rest of the drawing. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link OpenOptionsAutoCAD}
	 * @since CS3
	 * @version CS3
	 */
	scaleLineweights:Boolean;

	/**
	 * The name of the layout in the drawing to import.
	 * @type {String}
	 * @see {@link OpenOptionsAutoCAD}
	 * @since CS3
	 * @version CS3
	 */
	selectedLayoutName:String;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link OpenOptionsAutoCAD}
	 * @since CS3
	 * @version CS3
	 */
	readonly typename:String;

	/**
	 * The unit to map to. Default: {@link AutoCADUnit.Millimeters}
	 * @type {AutoCADUnit}
	 * @see {@link OpenOptionsAutoCAD}
	 * @since CS3
	 * @version CS3
	 */
	unit:AutoCADUnit;

	/**
	 * The ratio by which to scale while mapping units. Default: <b>1.0</b>
	 * @type {Number} double
	 * @see {@link OpenOptionsAutoCAD}
	 * @since CS3
	 * @version CS3
	 */
	unitScaleRatio:Number;
}