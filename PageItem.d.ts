/**
 * Any art item. Every art item and group in a document is a page item. You may refer to a page item as an element of a document, layer, or group item.
 * The {@link PageItem} class gives you complete access to every art item contained in an Illustrator document. The {@link PageItem} class is the superclass of all artwork objects in a document. The {@link CompoundPathItem}, {@link GroupItem}, {@link MeshItem}, {@link PathItem}, {@link PlacedItem}, {@link PluginItem}, {@link RasterItem}, and {@link TextFrame} classes each inherit a set of properties from the {@link PageItem} class.
 * You cannot create a {@link PageItem} directly, you must create one of the specific {@link PageItem} subclasses, such as {@link PathItem}.
 *
 * @abstract
 *
 * @since CS2
 * @version CS4
 *
 * <b>Properties</b>
 * ･ {@link artworkKnockout}
 * ･ {@link blendingMode}
 * ･ {@link controlBounds}
 * ･ {@link editable}
 * ･ {@link geometricBounds}
 * ･ {@link height}
 * ･ {@link hidden}
 * ･ {@link isIsolated}
 * ･ {@link layer}
 * ･ {@link left}
 * ･ {@link locked}
 * ･ {@link name}
 * ･ {@link note}
 * ･ {@link opacity}
 * ･ {@link position}
 * ･ {@link selected}
 * ･ {@link sliced}
 * ･ {@link tags}
 * ･ {@link top}
 * ･ {@link URL}
 * ･ {@link visibilityVariable}
 * ･ {@link visibleBounds}
 * ･ {@link width}
 * ･ {@link wrapInside}
 * ･ {@link wrapOffset}
 * ･ {@link wrapped}
 * ･ {@link zOrderPosition}
 *
 * <b>Methods</b>
 * ･ {@link resize}
 * ･ {@link rotate}
 * ･ {@link transform}
 * ･ {@link translate}
 * ･ {@link zOrder}
 */
declare class PageItem
{
	/**
	 * Is this object used to create a knockout.
	 * @type {KnockoutState}
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	artworkKnockout:KnockoutState;

	/**
	 * The mode to use when compositing this object. An object is considered composited when its opacity is set to less than 100.0 (100%).
	 * @type {BlendModes}
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	blendingMode:BlendModes;

	/**
	 * Read-only. The bounds of the object including stroke width and controls.
	 * @const
	 * @type {Number[]} array of 4 numbers
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	readonly controlBounds:Number[];

	/**
	 * Read-only. If <b>true</b>, this page item is editable.
	 * @const
	 * @type {Boolean}
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	readonly editable:Boolean;

	/**
	 * Read-only. The object’s bounds excluding the stroke width.
	 * @const
	 * @type {Number[]} array of 4 numbers
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	readonly geometricBounds:Number[];

	/**
	 * The height of the page item, calculated from the geometric bounds. Range: <b>0.0 to 16348.0</b>
	 * @type {Number} double
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	height:Number;

	/**
	 * If <b>true</b>, this page item is hidden.
	 * @type {Boolean}
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	hidden:Boolean;

	/**
	 * If <b>true</b>, this object is isolated.
	 * @type {Boolean}
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	isIsolated:Boolean;

	/**
	 * Read-only. The layer to which this page item belongs.
	 * @const
	 * @type {Layer} {@link Layer} object
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	readonly layer:Layer;

	/**
	 * The left position of the art item.
	 * @type {Number} double
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	left:Number;

	/**
	 * If <b>true</b>, this page item is locked.
	 * @type {Boolean}
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	locked:Boolean;

	/**
	 * The name of this page item.
	 * @type {String}
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	name:String;

	/**
	 * The note assigned to this item.
	 * @type {String}
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	note:String;

	/**
	 * The opacity of this object, where 100.0 is completely opaque and 0.0 is completely transparent.
	 * @type {Number} double
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	opacity:Number;

	/**
	 * The position (in points) of the top left corner of the item in the format {x, y}. Does not include stroke weight.
	 * @type {Number[]} array of 2 numbers
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	position:Number[];

	/**
	 * If <b>true</b>, this object is selected.
	 * @type {Boolean}
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	selected:Boolean;

	/**
	 * If <b>true</b>, preserve slices.
	 * @type {Boolean}
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	sliced:Boolean;

	/**
	 * The collection of tags associated with this page item.
	 * @type {Tags|Tag[]} {@link Tags} collection object
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	tags:Tags|Tag[];

	/**
	 * The top position of the art item.
	 * @type {Number} double
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	top:Number;

	/**
	 * The value of the Adobe URL tag assigned to this page item.
	 * @type {String}
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	URL:String;

	/**
	 * The visibility variable to which this page item path is bound.
	 * @type {Variable} {@link Variable} object
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	visibilityVariable:Variable;

	/**
	 * Read-only. The object’s visible bounds, including stroke width of any objects in the illustration.
	 * @const
	 * @type {Number[]} array of 4 numbers
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	readonly visibleBounds:Number[];

	/**
	 * The width of the page item, calculated from the geometric bounds. Range: <b>0.0 to 16348.0</b>
	 * @type {Number} double
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	width:Number;

	/**
	 * If <b>true</b>, the text frame object should be wrapped inside this object.
	 * @type {Boolean}
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	wrapInside:Boolean;

	/**
	 * The offset to use when wrapping text around this object.
	 * @type {Number} double
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	wrapOffset:Number;

	/**
	 * If <b>true</b>, wrap text frame objects around this object (text frame must be above the object).
	 * @type {Boolean}
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	wrapped:Boolean;

	/**
	 * Read-only. The drawing order of the art within its group or layer.
	 * @const
	 * @type {Number} long
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	readonly zOrderPosition:Number;

	/**
	 * Scales art object (s).
	 * @param {Number} scaleX {@link Number} double
	 * @param {Number} scaleY {@link Number} double
	 * @param {Boolean} [changePositions] {@link Boolean}
	 * @param {Boolean} [changeFillPatterns] {@link Boolean}
	 * @param {Boolean} [changeFillGradients] {@link Boolean}
	 * @param {Boolean} [changeStrokePattern] {@link Boolean}
	 * @param {Number} [changeLineWidths] {@link Number} double
	 * @param {Transformation} [scaleAbout] {@link Transformation}
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	resize(scaleX:Number, scaleY:Number, changePositions?:Boolean, changeFillPatterns?:Boolean, changeFillGradients?:Boolean, changeStrokePattern?:Boolean, changeLineWidths?:Number, scaleAbout?:Transformation):void;

	/**
	 * Rotates art object (s).
	 * @param {Number} angle {@link Number} double
	 * @param {Boolean} [changePositions] {@link Boolean}
	 * @param {Boolean} [changeFillPatterns] {@link Boolean}
	 * @param {Boolean} [changeFillGradients] {@link Boolean}
	 * @param {Boolean} [changeStrokePattern] {@link Boolean}
	 * @param {Transformation} [scaleAbout] {@link Transformation}
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	rotate(angle:Number, changePositions?:Boolean, changeFillPatterns?:Boolean, changeFillGradients?:Boolean, changeStrokePattern?:Boolean, scaleAbout?:Transformation):void;

	/**
	 * Transforms art object (s) using a transformation matrix.
	 * @param {Matrix} transformationMatrix {@link Matrix} object
	 * @param {Boolean} [changePositions] {@link Boolean}
	 * @param {Boolean} [changeFillPatterns] {@link Boolean}
	 * @param {Boolean} [changeFillGradients] {@link Boolean}
	 * @param {Boolean} [changeStrokePattern] {@link Boolean}
	 * @param {Number} [changeLineWidths] {@link Number} double
	 * @param {Transformation} [scaleAbout] {@link Transformation}
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	transform(transformationMatrix:Matrix, changePositions?:Boolean, changeFillPatterns?:Boolean, changeFillGradients?:Boolean, changeStrokePattern?:Boolean, changeLineWidths?:Number, scaleAbout?:Transformation):void;

	/**
	 * Repositions art object (s).
	 * @param {Number} [deltaX] {@link Number} double
	 * @param {Number} [deltaY] {@link Number} double
	 * @param {Boolean} [transformObjects] {@link Boolean}
	 * @param {Boolean} [transformFillPatterns] {@link Boolean}
	 * @param {Boolean} [transformFillGradients] {@link Boolean}
	 * @param {Boolean} [transformStrokePatterns] {@link Boolean}
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	translate(deltaX?:Number, deltaY?:Number, transformObjects?:Boolean, transformFillPatterns?:Boolean, transformFillGradients?:Boolean, transformStrokePatterns?:Boolean):void;

	/**
	 * Arranges the art relative to other art in the group or layer.
	 * @param {ZOrderMethod} zOrderCmd {@link ZOrderMethod}
	 * @see {@link PageItem}
	 * @since CS4
	 * @version CS4
	 */
	zOrder(zOrderCmd:ZOrderMethod):void;
}