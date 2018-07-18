/**
 * An artwork item placed in a document as a linked file. For example, an artwork object created using the File > Place command in Illustrator or using the {@link PlacedItems#add} method of the {@link PlacedItems} collection object is a placed item. For information, see {@link PlacedItems}.
 *
 * @since CS2
 * @version CS6
 *
 * <b>Properties</b>
 * ･ {@link artworkKnockout}
 * ･ {@link blendingMode}
 * ･ {@link boundingBox}
 * ･ {@link contentVariable}
 * ･ {@link controlBounds}
 * ･ {@link editable}
 * ･ {@link file}
 * ･ {@link geometricBounds}
 * ･ {@link height}
 * ･ {@link hidden}
 * ･ {@link isIsolated}
 * ･ {@link layer}
 * ･ {@link left}
 * ･ {@link locked}
 * ･ {@link matrix}
 * ･ {@link name}
 * ･ {@link note}
 * ･ {@link opacity}
 * ･ {@link parent}
 * ･ {@link position}
 * ･ {@link selected}
 * ･ {@link sliced}
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
 * ･ {@link embed}
 * ･ {@link move}
 * ･ {@link relink}
 * ･ {@link remove}
 * ･ {@link resize}
 * ･ {@link rotate}
 * ･ {@link trace}
 * ･ {@link transform}
 * ･ {@link translate}
 * ･ {@link zOrder}
 *
 * @example
 * ➤ Changing the selection state of placed items
 *     // Toggles the selection state of all placed items.
 *
 *     if (app.documents.length > 0) {
 *         for (i = 0; i < app.activeDocument.placedItems.length; i++) {
 *             placedArt = app.activeDocument.placedItems[i];
 *             placedArt.selected = !(placedArt.selected);
 *         }
 *     }
 */
declare class PlacedItem extends PageItem
{
	/**
	 * Is this object used to create a knockout, and if so, what kind of knockout.
	 * @type {KnockoutState}
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	artworkKnockout:KnockoutState;

	/**
	 * The blend mode used when compositing an object.
	 * @type {BlendModes}
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	blendingMode:BlendModes;

	/**
	 * Read-only. The dimensions of the placed art item regardless of transformations.
	 * @const
	 * @type {Number[]} array of 4 numbers
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly boundingBox:Number[];

	/**
	 * The content variable bound to the item.
	 * @type {Variable} {@link Variable} object
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	contentVariable:Variable;

	/**
	 * Read-only. The bounds of the object including stroke width and controls.
	 * @const
	 * @type {Number[]} array of 4 numbers
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly controlBounds:Number[];

	/**
	 * Read-only. If <b>true</b>, this item is editable.
	 * @const
	 * @type {Boolean}
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly editable:Boolean;

	/**
	 * The file containing the artwork.
	 * @type {File} {@link File} object
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	file:File;

	/**
	 * Read-only. The bounds of the object excluding stroke width.
	 * @const
	 * @type {Number[]} array of 4 numbers
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly geometricBounds:Number[];

	/**
	 * The height of the group item.
	 * @type {Number} double
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	height:Number;

	/**
	 * If <b>true</b>, this item is hidden.
	 * @type {Boolean}
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	hidden:Boolean;

	/**
	 * If <b>true</b>, this object is isolated.
	 * @type {Boolean}
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	isIsolated:Boolean;

	/**
	 * Read-only. The layer to which this item belongs.
	 * @const
	 * @type {Layer} {@link Layer} object
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly layer:Layer;

	/**
	 * The position of the left side of the item (in points, measured from the left side of the page).
	 * @type {Number} double
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	left:Number;

	/**
	 * If <b>true</b>, this item is locked.
	 * @type {Boolean}
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	locked:Boolean;

	/**
	 * The transformation matrix of the placed artwork.
	 * @type {Matrix} {@link Matrix} object
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	matrix:Matrix;

	/**
	 * The name of this item.
	 * @type {String}
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	name:String;

	/**
	 * The note assigned to this item.
	 * @type {String}
	 * @see {@link PlacedItem}
	 * @since CS3
	 * @version CS3
	 */
	note:String;

	/**
	 * The opacity of the object. Range: <b>0.0 to 100.0</b>.
	 * @type {Number}
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	opacity:Number;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Layer|GroupItem} {@link Layer} or {@link GroupItem} object
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Layer|GroupItem;

	/**
	 * The position (in points) of the top left corner of the {@link PlacedItem} object in the format [x, y]. Does not include stroke weight.
	 * @type {Number[]} array of 2 numbers
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	position:Number[];

	/**
	 * If <b>true</b>, this item is selected.
	 * @type {Boolean}
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	selected:Boolean;

	/**
	 * If <b>true</b>, the item sliced. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	sliced:Boolean;

	/**
	 * Read-only. The tags contained in this item.
	 * @const
	 * @type {Tags|Tag[]} {@link Tags} collection object
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly tags:Tags|Tag[];

	/**
	 * The position of the top of the item (in points, measured from the bottom of the page).
	 * @type {Number} double
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	top:Number;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * The value of the Adobe URL tag assigned to this item.
	 * @type {String}
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	uRL:String;

	/**
	 * The visibility variable bound to the item.
	 * @type {Variable} {@link Variable} object
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	visibilityVariable:Variable;

	/**
	 * Read-only. The visible bounds of the item including stroke width.
	 * @const
	 * @type {Number[]} array of 4 numbers
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly visibleBounds:Number[];

	/**
	 * The width of the item.
	 * @type {Number} double
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	width:Number;

	/**
	 * If <b>true</b>, the text frame object should be wrapped inside this object.
	 * @type {Boolean}
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	wrapInside:Boolean;

	/**
	 * The offset to use when wrapping text around this object.
	 * @type {Number} double
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	wrapOffset:Number;

	/**
	 * If <b>true</b>, wrap text frame objects around this object (text frame must be above the object).
	 * @type {Boolean}
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	wrapped:Boolean;

	/**
	 * Read-only. The position of this item within the stacking order of the group or layer({@link parent}) that contains the item.
	 * @const
	 * @type {Number} long
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly zOrderPosition:Number;

	/**
	 * Creates a {@link duplicate} of the selected object.
	 * @param {Object} [relativeObject] {@link Object}
	 * @param {ElementPlacement} [insertionLocation] {@link ElementPlacement}
	 * @return {PlacedItem} {@link PlacedItem} object
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	duplicate(relativeObject?:Object, insertionLocation?:ElementPlacement):PlacedItem;

	/**
	 * Embeds this art in the document. Converts the art to art item objects as needed and deletes this object.
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	embed():void;

	/**
	 * Moves the object.
	 * @param {Object} relativeObject {@link Object}
	 * @param {ElementPlacement} insertionLocation {@link ElementPlacement}
	 * @return {PlacedItem} {@link PlacedItem) object
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	move(relativeObject:Object, insertionLocation:ElementPlacement):PlacedItem;

	/**
	 * Relinks the art object with the file that defines its content.
	 * @param {File} linkFile {@link File} object
	 * @see {@link PlacedItem}
	 * @since CS6
	 * @version CS6
	 */
	relink(linkFile:File):void;

	/**
	 * Deletes this object.
	 * @see {@link PlacedItem}
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
	 * @see {@link PlacedItem}
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
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	rotate(angle:Number, changePositions?:Boolean, changeFillPatterns?:Boolean, changeFillGradients?:Boolean, changeStrokePattern?:Boolean, rotateAbout?:Transformation):void;

	/**
	 * Converts the raster art for this object to vector art, using default options. Reorders the placed art into the source art of a plug-in group, and converts it into a group of {@link filled} and/or {@link stroked} paths that resemble the original image.
	 * Creates and returns a {@link PluginItem} object that references a {@link TracingObject} object.
	 * @return {PluginItem} {@link PluginItem} object
	 * @see {@link PlacedItem}
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
	 * @param {Transformation} [transformAbout] {@link Transformation}
	 * @see {@link PlacedItem}
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
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	translate(deltaX?:Number, deltaY?:Number, transformObjects?:Boolean, transformFillPatterns?:Boolean, transformFillGradients?:Boolean, transformStrokePatterns?:Boolean):void;

	/**
	 * Arranges the art item’s position in the stacking order of the group or layer({@link parent}) of this object.
	 * @param {ZOrderMethod} zOrderCmd {@link ZOrderMethod}
	 * @see {@link PlacedItem}
	 * @since CS2
	 * @version CS2
	 */
	zOrder(zOrderCmd:ZOrderMethod):void;
}