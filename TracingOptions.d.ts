/**
 * A set of options used in converting raster art to vector art by tracing.
 *
 * @since CS2
 * @version CS3
 *
 * <b>Properties</b>
 * ･ {@link cornerAngle}
 * ･ {@link fills}
 * ･ {@link ignoreWhite}
 * ･ {@link livePaintOutput}
 * ･ {@link maxColors}
 * ･ {@link maxStrokeWeight}
 * ･ {@link minArea}
 * ･ {@link minStrokeLength}
 * ･ {@link outputToSwatches}
 * ･ {@link palette}
 * ･ {@link parent}
 * ･ {@link pathFitting}
 * ･ {@link preprocessBlur}
 * ･ {@link preset}
 * ･ {@link resample}
 * ･ {@link resampleResolution}
 * ･ {@link strokes}
 * ･ {@link threshold}
 * ･ {@link tracingMode}
 * ･ {@link typename}
 * ･ {@link viewRaster}
 * ･ {@link viewVector}
 *
 * <b>Methods</b>
 * ･ {@link loadFromPreset}
 * ･ {@link storeToPreset}
 */
declare class TracingOptions
{
	/**
	 * The sharpness, in degrees of a turn in the original image that is considered a corner in the tracing result path. Range: <b>0 to 180</b>
	 * @type {Number} double
	 * @see {@link TracingOptions}
	 * @since CS2
	 * @version CS2
	 */
	cornerAngle:Number;

	/**
	 * If <b>true</b>, trace with {@link fills}. At least one of {@link fills} or {@link strokes} must be <b>true</b>.
	 * @type {Boolean}
	 * @see {@link TracingOptions}
	 * @since CS2
	 * @version CS2
	 */
	fills:Boolean;

	/**
	 * If <b>true</b>, ignores white fill color.
	 * @type {Boolean}
	 * @see {@link TracingOptions}
	 * @since CS3
	 * @version CS3
	 */
	ignoreWhite:Boolean;

	/**
	 * If <b>true</b>, result is LivePaint art. If <b>false</b>, it is classic art.
	 * <b>NOTE:</b> A script should only set this value in preparation for a subsequent expand operation. Leaving a tracing on the artboard when this property is <b>true</b> can lead to unexpected application behavior.
	 * @type {Boolean}
	 * @see {@link TracingOptions}
	 * @since CS2
	 * @version CS2
	 */
	livePaintOutput:Boolean;

	/**
	 * The maximum number of colors allowed for automatic palette generation. Used only if {@link TracingOptions#tracingMode} is color or grayscale. Range: <b>2 to 256</b>
	 * @type {Number} long
	 * @see {@link TracingOptions}
	 * @since CS2
	 * @version CS2
	 */
	maxColors:Number;

	/**
	 * The maximum stroke weight, when {@link strokes} is <b>true</b>. Range: <b>0.01 to 100.0</b>
	 * @type {Number} double
	 * @see {@link TracingOptions}
	 * @since CS2
	 * @version CS2
	 */
	maxStrokeWeight:Number;

	/**
	 * The smallest feature, in square pixels, that is traced. For example, if it is 4, a feature of 2 pixels wide by 2 pixels high is traced.
	 * @type {Number} long
	 * @see {@link TracingOptions}
	 * @since CS2
	 * @version CS2
	 */
	minArea:Number;

	/**
	 * The minimum <b>length</b> in pixels of features in the original image that can be {@link stroked}, when {@link strokes} is <b>true</b>. Smaller features are omitted. Range: <b>0.0 to 200.0</b>. Default: <b>20.0</b>
	 * @type {Number} double
	 * @see {@link TracingOptions}
	 * @since CS2
	 * @version CS2
	 */
	minStrokeLength:Number;

	/**
	 * If <b>true</b>, named colors (swatches) are generated for each new color created by the tracing result. Used only if {@link TracingOptions#tracingMode} is color or grayscale.
	 * @type {Boolean}
	 * @see {@link TracingOptions}
	 * @since CS2
	 * @version CS2
	 */
	outputToSwatches:Boolean;

	/**
	 * The name of a color palette to use for tracing. If the empty string, use the automatic palette. Used only if {@link TracingOptions#tracingMode} is color or grayscale.
	 * @type {String}
	 * @see {@link TracingOptions}
	 * @since CS2
	 * @version CS2
	 */
	palette:String;

	/**
	 * Read-only. The object’s container.
	 * @const
	 * @type {Object}
	 * @see {@link TracingOptions}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * The distance between the traced shape and the original pixel shape. Lower values create a tighter path fitting. Higher values create a looser path fitting. Range: <b>0.0 to 10.0</b>
	 * @type {Number} double
	 * @see {@link TracingOptions}
	 * @since CS2
	 * @version CS2
	 */
	pathFitting:Number;

	/**
	 * The amount of blur used during preprocessing, in pixels. Blurring helps reduce small artifacts and smooth jagged edges in the tracing result. Range: <b>0.0 to 2.0</b>
	 * @type {Number} double
	 * @see {@link TracingOptions}
	 * @since CS2
	 * @version CS2
	 */
	preprocessBlur:Number;

	/**
	 * Read-only. The name of a preset file containing these options.
	 * @const
	 * @type {String}
	 * @see {@link TracingOptions}
	 * @since CS2
	 * @version CS2
	 */
	readonly preset:String;

	/**
	 * If <b>true</b>, resample when tracing. (This setting is not captured in a preset file.)
	 * Always <b>true</b> when the raster source art is placed or linked.
	 * @type {Boolean}
	 * @see {@link TracingOptions}
	 * @since CS2
	 * @version CS2
	 */
	resample:Boolean;

	/**
	 * The resolution to use when resampling in pixels per inch (ppi). Lower resolution increases the speed of the tracing operation. (This setting is not captured in a preset file.)
	 * @type {Number} double
	 * @see {@link TracingOptions}
	 * @since CS2
	 * @version CS2
	 */
	resampleResolution:Number;

	/**
	 * If <b>true</b>, trace with {@link strokes}. At least one of {@link fills} or {@link strokes} must be <b>true</b>. Used only if {@link TracingOptions#tracingMode} is black-and-white.
	 * @type {Boolean}
	 * @see {@link TracingOptions}
	 * @since CS2
	 * @version CS2
	 */
	strokes:Boolean;

	/**
	 * The threshold value of black-and-white tracing. All pixels with a grayscale value greater than this are converted to black. Used only if {@link TracingOptions#tracingMode} is black-and-white. Range: <b>0 to 255</b>
	 * @type {Number} long
	 * @see {@link TracingOptions}
	 * @since CS2
	 * @version CS2
	 */
	threshold:Number;

	/**
	 * The color mode for tracing.
	 * @type {TracingModeType}
	 * @see {@link TracingOptions}
	 * @since CS2
	 * @version CS2
	 */
	tracingMode:TracingModeType;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link TracingOptions}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * The view for previews of the raster image. (This setting is not captured in a preset file.)
	 * @type {ViewRasterType}
	 * @see {@link TracingOptions}
	 * @since CS2
	 * @version CS2
	 */
	viewRaster:ViewRasterType;

	/**
	 * The view for previews of the vector result. (This setting is not captured in a preset file.)
	 * @type {ViewVectorType}
	 * @see {@link TracingOptions}
	 * @since CS2
	 * @version CS2
	 */
	viewVector:ViewVectorType;

	/**
	 * Loads a set of options from the specified preset, as found in the {@link Application#tracingPresetsList} array.
	 * @param {String} presetName {@link String}
	 * @return {Boolean} {@link Boolean}
	 * @see {@link TracingOptions}
	 * @since CS2
	 * @version CS2
	 */
	loadFromPreset(presetName:String):Boolean;

	/**
	 * Saves this set of options in the specified preset. Use a name found in the {@link Application#tracingPresetsList} array, or a new name to create a new preset. For an existing preset, overwrites an unlocked preset and returns <b>true</b>. Returns <b>false</b> if the preset is locked.
	 * @param {String} presetName {@link String}
	 * @return {Boolean} {@link Boolean}
	 * @see {@link TracingOptions}
	 * @since CS2
	 * @version CS2
	 */
	storeToPreset(presetName:String):Boolean;
}