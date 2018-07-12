/**
 * An art item made reusable by adding it to the {@link Symbols} palette. A {@link SymbolItem} is linked to the {@link Symbol} from which it was created and changes if you modify the associated {@link Symbol} object.
 *
 * @since CS2
 * @version CS3
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
 * ･ {@link parent}
 * ･ {@link position}
 * ･ {@link selected}
 * ･ {@link sliced}
 * ･ {@link symbol}
 * ･ {@link tags}
 * ･ {@link top}
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
 * ･ {@link duplicate}
 * ･ {@link move}
 * ･ {@link remove}
 * ･ {@link resize}
 * ･ {@link rotate}
 * ･ {@link transform}
 * ･ {@link translate}
 * ･ {@link zOrder}
 */
declare class SymbolItem extends PageItem
{
	/**
	 * Is this object used to create a knockout, and if so, what kind of knockout.
	 * @type {KnockoutState}
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	artworkKnockout:KnockoutState;

	/**
	 * The blend mode used when compositing an object.
	 * @type {BlendModes}
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	blendingMode:BlendModes;

	/**
	 * Read-only. The bounds of the object including stroke width and controls.
	 * @const
	 * @type {Number[]} array of 4 numbers
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly controlBounds:Number[];

	/**
	 * Read-only. If <b>true</b>, this item is editable.
	 * @const
	 * @type {Boolean}
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly editable:Boolean;

	/**
	 * Read-only. The bounds of the object excluding stroke width.
	 * @const
	 * @type {Number[]} array of 4 numbers
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly geometricBounds:Number[];

	/**
	 * The height of the group item.
	 * @type {Number} double
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	height:Number;

	/**
	 * If <b>true</b>, this item is hidden.
	 * @type {Boolean}
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	hidden:Boolean;

	/**
	 * If <b>true</b>, this object is isolated.
	 * @type {Boolean}
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	isIsolated:Boolean;

	/**
	 * Read-only. The layer to which this item belongs.
	 * @const
	 * @type {Layer} {@link Layer} object
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly layer:Layer;

	/**
	 * The position of the left side of the item (in points, measured from the left side of the page).
	 * @type {Number}
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	left:Number;

	/**
	 * If <b>true</b>, this item is locked.
	 * @type {Boolean}
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	locked:Boolean;

	/**
	 * The name of this item.
	 * @type {String}
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	name:String;

	/**
	 * The note assigned to this item.
	 * @type {String}
	 * @see {@link SymbolItem}
	 * @since CS3
	 * @version CS3
	 */
	note:String;

	/**
	 * The opacity of the object. Range: <b>0.0 to 100.0</b>.
	 * @type {Number}
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	opacity:Number;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Layer|GroupItem} {@link Layer} object or {@link GroupItem} object
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Layer|GroupItem;

	/**
	 * The position (in points) of the top left corner of the {@link SymbolItem} object in the format [x, y]. Does not include stroke weight.
	 * @type {Number[]} array of 2 numbers
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	position:Number[];

	/**
	 * If <b>true</b>, this item is selected.
	 * @type {Boolean}
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	selected:Boolean;

	/**
	 * If <b>true</b>, the item sliced. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	sliced:Boolean;

	/**
	 * The symbol that was used to create this {@link SymbolItem}.
	 * @type {Symbol} {@link Symbol} object
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	symbol:Symbol;

	/**
	 * Read-only. The tags contained in this item.
	 * @const
	 * @type {Tags} {@link Tags} collection object
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly tags:Tags;

	/**
	 * The position of the top of the item (in points, measured from the bottom of the page).
	 * @type {Number} double
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	top:Number;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * The value of the Adobe URL tag assigned to this item.
	 * @type {String}
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	uRL:String;

	/**
	 * The visibility variable bound to the item.
	 * @type {Variable} {@link Variable} object
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	visibilityVariable:Variable;

	/**
	 * Read-only. The visible bounds of the item including stroke width.
	 * @const
	 * @type {Number[]} array of 4 numbers
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly visibleBounds:Number[];

	/**
	 * The width of the item.
	 * @type {Number} double
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	width:Number;

	/**
	 * If <b>true</b>, the text frame object should be wrapped inside this object.
	 * @type {Boolean}
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	wrapInside:Boolean;

	/**
	 * The offset to use when wrapping text around this object.
	 * @type {Number} double
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	wrapOffset:Number;

	/**
	 * If <b>true</b>, wrap text frame objects around this object (text frame must be above the object).
	 * @type {Boolean}
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	wrapped:Boolean;

	/**
	 * Read-only. The position of this item within the stacking order of the group or layer({@link parent}) that contains the item.
	 * @const
	 * @type {Number} long
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly zOrderPosition:Number;

	/**
	 * Creates a {@link duplicate} of the selected object.
	 * @param {Object} [relativeObject] {@link Object}
	 * @param {ElementPlacement} [insertionLocation] {@link ElementPlacement}
	 * @return {SymbolItem} {@link SymbolItem} object
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	duplicate(relativeObject?:Object, insertionLocation?:ElementPlacement):SymbolItem;

	/**
	 * Moves the object.
	 * @param {Object} relativeObject {@link Object}
	 * @param {ElementPlacement} insertionLocation {@link ElementPlacement}
	 * @return {SymbolItem} {@link SymbolItem} object
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	move(relativeObject:Object, insertionLocation:ElementPlacement):SymbolItem;

	/**
	 * Deletes this object.
	 * @see {@link SymbolItem}
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
	 * @see {@link SymbolItem}
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
	 * @param {Transformation} [rotateAbout] {@link Transformation}
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	rotate(angle:Number, changePositions?:Boolean, changeFillPatterns?:Boolean, changeFillGradients?:Boolean, changeStrokePattern?:Boolean, rotateAbout?:Transformation):void;

	/**
	 * Transforms the art item by applying a transformation matrix.
	 * @param {Matrix} transformationMatrix {@link Matrix} object
	 * @param {Boolean} [changePositions] {@link Boolean}
	 * @param {Boolean} [changeFillPatterns] {@link Boolean}
	 * @param {Boolean} [changeFillGradients] {@link Boolean}
	 * @param {Boolean} [changeStrokePattern] {@link Boolean}
	 * @param {Number} [changeLineWidths] {@link Number} double
	 * @param {Transformation} [transformAbout] {@link Transformation}
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	transform(transformationMatrix:Matrix, changePositions?:Boolean, changeFillPatterns?:Boolean, changeFillGradients?:Boolean, changeStrokePattern?:Boolean, changeLineWidths?:Number, transformAbout?:Transformation):void;

	/**
	 * Repositions the art item relative to the current position, where <b>deltaX</b> is the horizontal offset and <b>deltaY</b> is the vertical offset.
	 * @param {Number} [deltaX] {@link Number} double
	 * @param {Number} [deltaY] {@link Number} double
	 * @param {Boolean} [transformObjects] {@link Boolean}
	 * @param {Boolean} [transformFillPatterns] {@link Boolean}
	 * @param {Boolean} [transformFillGradients] {@link Boolean}
	 * @param {Boolean} [transformStrokePatterns] {@link Boolean}
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	translate(deltaX?:Number, deltaY?:Number, transformObjects?:Boolean, transformFillPatterns?:Boolean, transformFillGradients?:Boolean, transformStrokePatterns?:Boolean):void;

	/**
	 * Arranges the art item’s position in the stacking order of the group or layer ({@link parent}) of this object.
	 * @param {ZOrderMethod} zOrderCmd {@link ZOrderMethod}
	 * @see {@link SymbolItem}
	 * @since CS2
	 * @version CS2
	 */
	zOrder(zOrderCmd:ZOrderMethod):void;
}