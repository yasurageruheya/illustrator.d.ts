/**
 * A bitmap art item in a document. A script can create a raster item from an external file, or by copying an existing raster item with the {@link duplicate} method.
 *
 * @since CS2
 * @version CS3
 *
 * <b>Properties</b>
 * ･ {@link artworkKnockout}
 * ･ {@link bitsPerChannel}
 * ･ {@link blendingMode}
 * ･ {@link boundingBox}
 * ･ {@link channels}
 * ･ {@link colorants}
 * ･ {@link colorizedGrayscale}
 * ･ {@link contentVariable}
 * ･ {@link controlBounds}
 * ･ {@link editable}
 * ･ {@link embedded}
 * ･ {@link file}
 * ･ {@link geometricBounds}
 * ･ {@link height}
 * ･ {@link hidden}
 * ･ {@link imageColorSpace}
 * ･ {@link isIsolated}
 * ･ {@link layer}
 * ･ {@link left}
 * ･ {@link locked}
 * ･ {@link matrix}
 * ･ {@link name}
 * ･ {@link note}
 * ･ {@link opacity}
 * ･ {@link overprint}
 * ･ {@link parent}
 * ･ {@link position}
 * ･ {@link selected}
 * ･ {@link sliced}
 * ･ {@link status}
 * ･ {@link tags}
 * ･ {@link top}
 * ･ {@link transparent}
 * ･ {@link typename}
 * ･ {@link uRL}
 * ･ {@link visibilityVariable}
 * ･ {@link visibleBounds}
 * ･ {@link width}
 * ･ {@link wrapInside}
 * ･ {@link wrapOffset}
 * ･ {@link wrapped}
 * ･ {@link zOrderPosition}
 *
 * <b>Methods</b>
 * ･ {@link colorize}
 * ･ {@link duplicate}
 * ･ {@link move}
 * ･ {@link remove}
 * ･ {@link resize}
 * ･ {@link rotate}
 * ･ {@link trace}
 * ･ {@link transform}
 * ･ {@link translate}
 * ･ {@link zOrder}
 */
declare class RasterItem extends PageItem
{
	/**
	 * Is this object used to create a knockout, and if so, what kind of knockout.
	 * @type {KnockoutState}
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	artworkKnockout:KnockoutState;

	/**
	 * Read-only. The number of bits per channel.
	 * @const
	 * @type {Number} long
	 * @see {@link RasterItem}
	 * @since CS3
	 * @version CS3
	 */
	readonly bitsPerChannel:Number;

	/**
	 * The blend mode used when compositing an object.
	 * @type {BlendModes}
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	blendingMode:BlendModes;

	/**
	 * The dimensions of the placed art item regardless of transformations.
	 * @type {Number[]} array of 4 numbers
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS3
	 */
	boundingBox:Number[];

	/**
	 * Read-only. The number of channels.
	 * @const
	 * @type {Number} long
	 * @see {@link RasterItem}
	 * @since CS3
	 * @version CS3
	 */
	readonly channels:Number;

	/**
	 * Read-only. The colorants used in the raster art.
	 * @const
	 * @type {String[]} array of strings
	 * @see {@link RasterItem}
	 * @since CS3
	 * @version CS3
	 */
	readonly colorants:String[];

	/**
	 * Read-only. If <b>true</b>, the raster art is a colorized grayscale image.
	 * @const
	 * @type {Boolean}
	 * @see {@link RasterItem}
	 * @since CS3
	 * @version CS3
	 */
	readonly colorizedGrayscale:Boolean;

	/**
	 * The content variable bound to the item.
	 * @type {Variable} {@link Variable} object
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	contentVariable:Variable;

	/**
	 * Read-only. The bounds of the object including stroke width and controls.
	 * @const
	 * @type {Number[]} array of 4 numbers
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly controlBounds:Number[];

	/**
	 * Read-only. If <b>true</b>, this item is editable.
	 * @const
	 * @type {Boolean}
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly editable:Boolean;

	/**
	 * If <b>true</b>, the raster art item is embedded in the illustration.
	 * @type {Boolean}
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	embedded:Boolean;

	/**
	 * Read-only. The file containing the artwork.
	 * @const
	 * @type {File} {@link File} object
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS3
	 */
	readonly file:File;

	/**
	 * Read-only. The bounds of the object excluding stroke width.
	 * @const
	 * @type {Number[]} array of 4 numbers
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly geometricBounds:Number[];

	/**
	 * The height of the group item.
	 * @type {Number} double
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	height:Number;

	/**
	 * If <b>true</b>, this item is hidden.
	 * @type {Boolean}
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	hidden:Boolean;

	/**
	 * Read-only. The color space of the raster image.
	 * @const
	 * @type {ImageColorSpace}
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly imageColorSpace:ImageColorSpace;

	/**
	 * If <b>true</b>, this object is isolated.
	 * @type {Boolean}
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	isIsolated:Boolean;

	/**
	 * Read-only. The layer to which this item belongs.
	 * @type {Layer} {@link Layer} object
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly layer:Layer;

	/**
	 * The position of the left side of the item (in points, measured from the left side of the page).
	 * @type {Number} double
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	left:Number;

	/**
	 * If <b>true</b>, this item is locked.
	 * @type {Boolean}
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	locked:Boolean;

	/**
	 * The transformation matrix of the placed artwork.
	 * @type {Matrix} {@link Matrix} object
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	matrix:Matrix;

	/**
	 * The name of this item.
	 * @type {String}
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	name:String;

	/**
	 * The note assigned to this item.
	 * @type {String}
	 * @see {@link RasterItem}
	 * @since CS3
	 * @version CS3
	 */
	note:String;

	/**
	 * The opacity of the object. Range: <b>0.0 to 100.0</b>.
	 * @type {Number} double
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	opacity:Number;

	/**
	 * If <b>true</b>, the raster art overprints.
	 * @type {Boolean}
	 * @see {@link RasterItem}
	 * @since CS3
	 * @version CS3
	 */
	overprint:Boolean;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Layer|GroupItem} {@link Layer} object or {@link GroupItem} object
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Layer|GroupItem;

	/**
	 * The position (in points) of the top left corner of the {@link RasterItem} object in the format [x, y]. Does not include stroke weight.
	 * @type {Number[]} array of 2 numbers
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	position:Number[];

	/**
	 * If <b>true</b>, this item is selected.
	 * @type {Boolean}
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	selected:Boolean;

	/**
	 * If <b>true</b>, the item sliced. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	sliced:Boolean;

	/**
	 * Status of the linked image.
	 * @type {RasterLinkState}
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	status:RasterLinkState;

	/**
	 * Read-only. The tags contained in this item.
	 * @const
	 * @type {Tags|Tag[]} {@link Tags} collection object
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly tags:Tags|Tag[];

	/**
	 * The position of the top of the item (in points, measured from the bottom of the page).
	 * @type {Number} double
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	top:Number;

	/**
	 * Read-only. If <b>true</b>, the raster art is transparent.
	 * @const
	 * @type {Boolean}
	 * @see {@link RasterItem}
	 * @since CS3
	 * @version CS3
	 */
	readonly transparent:Boolean;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * The value of the Adobe URL tag assigned to this item.
	 * @type {String}
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	uRL:String;

	/**
	 * The visibility variable bound to the item.
	 * @type {Variable} {@link Variable} object
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	visibilityVariable:Variable;

	/**
	 * Read-only. The visible bounds of the item including stroke width.
	 * @const
	 * @type {Number[]} array of 4 numbers
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly visibleBounds:Number[];

	/**
	 * The width of the item.
	 * @type {Number} double
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	width:Number;

	/**
	 * If <b>true</b>, the text frame object should be wrapped inside this object.
	 * @const
	 * @type {Boolean}
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	wrapInside:Boolean;

	/**
	 * The offset to use when wrapping text around this object.
	 * @type {Number} double
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	wrapOffset:Number;

	/**
	 * If <b>true</b>, wrap text frame objects around this object (text frame must be above the object).
	 * @const
	 * @type {Boolean}
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	wrapped:Boolean;

	/**
	 * Read-only. The position of this item within the stacking order of the group or layer({@link parent}) that contains the item.
	 * @const
	 * @type {Number} long
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly zOrderPosition:Number;

	/**
	 * Colorizes the raster item with a {@link CMYKColor} or {@link RGBColor}.
	 * @param {Color} rasterColor {@link Color} object
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	colorize(rasterColor:Color):void;

	/**
	 * Creates a {@link duplicate} of the selected object.
	 * @param {Object} [relativeObject] {@link Object}
	 * @param {ElementPlacement} [insertionLocation] {@link ElementPlacement}
	 * @return {RasterItem} {@link RasterItem} object
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	duplicate(relativeObject?:Object, insertionLocation?:ElementPlacement):RasterItem;

	/**
	 * Moves the object.
	 * @param {Object} relativeObject {@link Object}
	 * @param {ElementPlacement} insertionLocation {@link ElementPlacement}
	 * @return {RasterItem} {@link RasterItem} object
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	move(relativeObject:Object, insertionLocation:ElementPlacement):RasterItem;

	/**
	 * Deletes this object.
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	remove():void;

	/**
	 * Scales the art item where <b>scaleX</b> is the horizontal scaling factor and <b>scaleY</b> is the vertical scaling factor. <b>100.0 = 100%.</b>
	 * @param {Number} scaleX {@link Number} double
	 * @param {Number} scaleY {@link Number} double
	 * @param {Boolean} [changePositions] {@link Boolean}
	 * @param {Boolean} [changeFillPatterns] {@link Boolean}
	 * @param {Boolean} [changeFillGradients] {@link Boolean}
	 * @param {Boolean} [changeStrokePattern] {@link Boolean}
	 * @param {Number} [changeLineWidths] {@link Number} double
	 * @param {Transformation} [scaleAbout] {@link Transformation}
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	resize(scaleX:Number, scaleY:Number, changePositions?:Boolean, changeFillPatterns?:Boolean, changeFillGradients?:Boolean, changeStrokePattern?:Boolean, changeLineWidths?:Number, scaleAbout?:Transformation):void;

	/**
	 * Rotates the art item relative to the current rotation. The object is rotated counter-clockwise if the <b>angle</b> value is positive, clockwise if the value is negative.
	 * @param {Number} angle {@link Number} double
	 * @param {Boolean} [changePositions] {@link Boolean}
	 * @param {Boolean} [changeFillPatterns] {@link Boolean}
	 * @param {Boolean} [changeFillGradients] {@link Boolean}
	 * @param {Boolean} [changeStrokePattern] {@link Boolean}
	 * @param {Transformation} [scaleAbout] {@link Transformation}
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	rotate(angle:Number, changePositions?:Boolean, changeFillPatterns?:Boolean, changeFillGradients?:Boolean, changeStrokePattern?:Boolean, scaleAbout?:Transformation):void;

	/**
	 * Converts the raster art for this object to vector art, using default options. Reorders the raster art into the source art of a plug-in group, and converts it into a group of {@link filled} and/or {@link stroked} paths that resemble the original image.
	 * Creates and returns a {@link PluginItem} object that references a {@link TracingObject} object.
	 * @return {PluginItem} {@link PluginItem} object
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	trace():PluginItem;

	/**
	 * Transforms the art item by applying a transformation matrix.
	 * @param {Matrix} transformationMatrix {@link Matrix} object
	 * @param {Boolean} [changePositions] {@link Boolean}
	 * @param {Boolean} [changeFillPatterns] {@link Boolean}
	 * @param {Boolean} [changeFillGradients] {@link Boolean}
	 * @param {Boolean} [changeStrokePattern] {@link Boolean}
	 * @param {Number} [changeLineWidths] {@link Number} double
	 * @param {Transformation} [scaleAbout] {@link Transformation}
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	transform(transformationMatrix:Matrix, changePositions?:Boolean, changeFillPatterns?:Boolean, changeFillGradients?:Boolean, changeStrokePattern?:Boolean, changeLineWidths?:Number, scaleAbout?:Transformation):void;

	/**
	 * Repositions the art item relative to the current position, where <b>deltaX</b> is the horizontal offset and <b>deltaY</b> is the vertical offset.
	 * @param {Number} [deltaX] {@link Number} double
	 * @param {Number} [deltaY] {@link Number} double
	 * @param {Boolean} [transformObjects] {@link Boolean}
	 * @param {Boolean} [transformFillPatterns] {@link Boolean}
	 * @param {Boolean} [transformFillGradients] {@link Boolean}
	 * @param {Boolean} [transformStrokePatterns] {@link Boolean}
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	translate(deltaX?:Number, deltaY?:Number, transformObjects?:Boolean, transformFillPatterns?:Boolean, transformFillGradients?:Boolean, transformStrokePatterns?:Boolean):void;

	/**
	 * Arranges the art item’s position in the stacking order of the group or layer ({@link parent}) of this object.
	 * @param {ZOrderMethod} zOrderCmd {@link ZOrderMethod}
	 * @see {@link RasterItem}
	 * @since CS2
	 * @version CS2
	 */
	zOrder(zOrderCmd:ZOrderMethod):void;
}