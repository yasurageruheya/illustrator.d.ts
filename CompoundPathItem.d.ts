/**
 * A compound path. These objects are composed of multiple intersecting paths, resulting in transparent interior spaces where the component paths overlap. The {@link pathItems} property provides access to the paths that make up the compound path.
 * Paths contained within a compound path or group in a document are returned as individual paths when a script asks for the paths contained in the document. However, paths contained in a compound path or group are not returned when a script asks for the paths in a layer that contains the compound path or group.
 * All paths within a compound path share property values. Therefore, if you set the value of a property of any one of the paths in the compound path, the properties of all other component paths are updated with the new value.
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
 * ･ {@link pathItems}
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
 * ･ {@link move}
 * ･ {@link remove}
 * ･ {@link resize}
 * ･ {@link rotate}
 * ･ {@link transform}
 * ･ {@link translate}
 * ･ {@link zOrder}
 *
 * @example
 * ➤ Selecting paths in a document
 *     // Selects all paths not part of a compound path
 *
 *     if (app.documents.length > 0) {
 *         doc = app.activeDocument;
 *         count = 0;
 *         if (doc.pathItems.length > 0) {
 *             thePaths = doc.pathItems;
 *             numPaths = thePaths.length;
 *             for (i = 0; i < doc.pathItems.length; i++) {
 *                 pathArt = doc.pathItems[i];
 *                 if (pathArt.parent.typename != "CompoundPathItem") {
 *                     pathArt.selected = true;
 *                     count++;
 *                 }
 *             }
 *         }
 *     }
 *
 * @example
 * ➤ Creating and modifying a compound path item
 *     // Creates a new compound path item containing 3 path
 *     // items, then sets the width and the color of the stroke
 *     // to all items in the compound path
 *
 *     if (app.documents.length > 0) {
 *         doc = app.activeDocument;
 *         newCompoundPath = doc.activeLayer.compoundPathItems.add();
 *
 *         // Create the path items
 *         newPath = newCompoundPath.pathItems.add();
 *         newPath.setEntirePath(Array(Array(30, 50), Array(30, 100)));
 *
 *         newPath = newCompoundPath.pathItems.add();
 *         newPath.setEntirePath(Array(Array(40, 100), Array(100, 100)));
 *
 *         newPath = newCompoundPath.pathItems.add();
 *         newPath.setEntirePath(Array(Array(100, 110), Array(100, 300)));
 *
 *         // Set stroke and width properties of the compound path
 *         newPath.stroked = true;
 *         newPath.strokeWidth = 3.5;
 *         newPath.strokeColor = app.activeDocument.swatches[3].color;
 *     }
 */
declare class CompoundPathItem extends PageItem
{
	/**
	 * Is this object used to create a knockout, and if so, what kind of knockout.
	 * @type {KnockoutState}
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	artworkKnockout:KnockoutState;

	/**
	 * The mode used when compositing an object.
	 * @type {BlendModes}
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	blendingMode:BlendModes;

	/**
	 * Read-only. The bounds of the object including stroke width and controls.
	 * @const
	 * @type {Number[]} array of 4 numbers
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly controlBounds:Number[];

	/**
	 * Read-only. If <b>true</b>, this item is editable.
	 * @const
	 * @type {Boolean}
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly editable:Boolean;

	/**
	 * Read-only. The bounds of the object excluding stroke width.
	 * @const
	 * @type {Number[]} array of 4 numbers
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly geometricBounds:Number[];

	/**
	 * The height of the compound path item excluding stroke width.
	 * @type {Number} double
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	height:Number;

	/**
	 * If <b>true</b>, this compound path item is hidden.
	 * @type {Boolean}
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	hidden:Boolean;

	/**
	 * If <b>true</b>, this object is isolated.
	 * @type {Boolean}
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	isIsolated:Boolean;

	/**
	 * Read-only. The layer to which this compound path item belongs.
	 * @const
	 * @type {Layer} {@link Layer} object
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly layer:Layer;

	/**
	 * The position of the left side of the item (in points, measured from the left side of the page).
	 * @type {Number} double
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	left:Number;

	/**
	 * If <b>true</b>, this compound path item is locked.
	 * @type {Boolean}
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	locked:Boolean;

	/**
	 * The name of this compound path item.
	 * @type {String}
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	name:String;

	/**
	 * The note assigned to this item.
	 * @type {String}
	 * @see {@link CompoundPathItem}
	 * @since CS3
	 * @version CS3
	 */
	note:String;

	/**
	 * The opacity of the object. Range: <b>0.0 to 100.0</b>.
	 * @type {Number} double
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	opacity:Number;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Layer|GroupItem} {@link Layer} object or {@link GroupItem} object
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Layer|GroupItem;

	/**
	 * Read-only. The path art items in this compound path.
	 * @const
	 * @type {PathItems} {@link PathItems} object
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly pathItems:PathItems;

	/**
	 * The position (in points) of the top left corner of the {@link CompoundPathItem} object in the format [x, y]. Does not include stroke weight.
	 * @type {Number[]} array of 2 numbers
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	position:Number[];

	/**
	 * If <b>true</b>, this compound path item is selected.
	 * @type {Boolean}
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	selected:Boolean;

	/**
	 * If <b>true</b>, the item is sliced. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	sliced:Boolean;

	/**
	 * Read-only. The tags contained in this object.
	 * @const
	 * @type {Tags} {@link Tags} collection object
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly tags:Tags;

	/**
	 * The position of the top of the item (in points, measured from the bottom of the page).
	 * @type {Number} double
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	top:Number;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * The value of the Adobe URL tag assigned to this compound path item.
	 * @type {String}
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	uRL:String;

	/**
	 * The visibility variable bound to the item.
	 * @type {Variable} variant {@link Variable} object
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	visibilityVariable:Variable;

	/**
	 * Read-only. The visible bounds of the compound path item including stroke width.
	 * @const
	 * @type {Number[]} array of 4 numbers
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly visibleBounds:Number[];

	/**
	 * The width of the compound path item excluding stroke width.
	 * @type {Number} double
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	width:Number;

	/**
	 * If <b>true</b>, the text frame object should be wrapped inside this object.
	 * @type {Boolean}
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	wrapInside:Boolean;

	/**
	 * The offset to use when wrapping text around this object.
	 * @type {Number} double
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	wrapOffset:Number;

	/**
	 * If <b>true</b>, wrap text frame objects around this object (text frame must be above the object).
	 * @type {Boolean}
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	wrapped:Boolean;

	/**
	 * Read-only. The position of this art item within the stacking order of the group or layer({@link parent}) that contains the art item.
	 * @const
	 * @type {Number} long
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly zOrderPosition:Number;

	/**
	 * Creates a {@link duplicate} of the selected object.
	 * @param {Object} [relativeObject] {@link Object}
	 * @param {ElementPlacement} [insertionLocation] {@link ElementPlacement}
	 * @return {CompoundPathItem} {@link CompoundPathItem} object
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	duplicate(relativeObject?:Object, insertionLocation?:ElementPlacement):CompoundPathItem;

	/**
	 * Moves the object.
	 * @param {Object} relativeObject {@link Object}
	 * @param {ElementPlacement} insertionLocation {@link ElementPlacement}
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	move(relativeObject:Object, insertionLocation:ElementPlacement):void;

	/**
	 * Deletes this object.
	 * @see {@link CompoundPathItem}
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
	 * @see {@link CompoundPathItem}
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
	 * @see {@link CompoundPathItem}
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
	 * @see {@link CompoundPathItem}
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
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	translate(deltaX?:Number, deltaY?:Number, transformObjects?:Boolean, transformFillPatterns?:Boolean, transformFillGradients?:Boolean, transformStrokePatterns?:Boolean):void;

	/**
	 * Arranges the art item’s position in the stacking order of the group or layer({@link parent}) of this object.
	 * @param {ZOrderMethod} zOrderCmd {@link ZOrderMethod}
	 * @see {@link CompoundPathItem}
	 * @since CS2
	 * @version CS2
	 */
	zOrder(zOrderCmd:ZOrderMethod):void;
}