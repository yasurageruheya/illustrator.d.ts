/**
 * A grouped set of art items. Group items can contain all of the same page items that a layer can contain, including other nested groups.
 * Paths contained in a group or compound path in a document are returned as individual paths when a script asks for the paths contained in the document. However, paths contained in a group or compound path are not returned when a script asks for the paths in a layer which contains the group or compound path.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link artworkKnockout}
 * ･ {@link blendingMode}
 * ･ {@link clipped}
 * ･ {@link compoundPathItems}
 * ･ {@link controlBounds}
 * ･ {@link editable}
 * ･ {@link geometricBounds}
 * ･ {@link graphItems}
 * ･ {@link groupItems}
 * ･ {@link height}
 * ･ {@link hidden}
 * ･ {@link isIsolated}
 * ･ {@link layer}
 * ･ {@link left}
 * ･ {@link legacyTextItems}
 * ･ {@link locked}
 * ･ {@link meshItems}
 * ･ {@link name}
 * ･ {@link opacity}
 * ･ {@link pageItems}
 * ･ {@link parent}
 * ･ {@link pathItems}
 * ･ {@link placedItems}
 * ･ {@link pluginItems}
 * ･ {@link position}
 * ･ {@link rasterItems}
 * ･ {@link selected}
 * ･ {@link sliced}
 * ･ {@link symbolItems}
 * ･ {@link tags}
 * ･ {@link textFrames}
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
 * ➤ Modifying all objects in a group
 *    It is easy to modify all of the objects contained in a group.
 *    This example demonstrates how to simplify your operations on multiple objects by creating group to contain them.
 *      // Create new art in a separate group to hold new triangle art
 *
 *      if (app.documents.length > 0) {
 *          var triangleGroup = app.activeDocument.groupItems.add();
 *
 *          // Create a triangle and add text. All new art are created inside a group
 *          var trianglePath = triangleGroup.pathItems.add();
 *          trianglePath.setEntirePath(Array(Array(100, 100), Array(300, 100), Array(200, Math.tan(1.0471975) * 100 + 100)));
 *          trianglePath.closed = true;
 *          trianglePath.stroked = true;
 *          trianglePath.filled = false;
 *          trianglePath.strokeWidth = 3;
 *
 *          var captionText = triangleGroup.textFrames.add();
 *          captionText.position = Array(100, 150);
 *          captionText.textRange.size = 48;
 *          captionText.contents = "A triangle";
 *
 *          var fillColor = new RGBColor;
 *          fillColor.red = 255;
 *          fillColor.green = 0;
 *          fillColor.blue = 0;
 *          captionText.characters.fillColor = fillColor;
 *      }
 */
declare class GroupItem extends PageItem
{
	/**
	 * Is this object used to create a knockout, and if so, what kind of knockout.
	 * @type {KnockoutState}
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	artworkKnockout:KnockoutState;

	/**
	 * The blend mode used when compositing an object.
	 * @type {BlendModes}
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	blendingMode:BlendModes;

	/**
	 * If <b>true</b>, the group is clipped to its first path item.
	 * @type {Boolean}
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	clipped:Boolean;

	/**
	 * Read-only. The compound path items contained in this group.
	 * @const
	 * @type {CompoundPathItems} {@link CompoundPathItems} collection object
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly compoundPathItems:CompoundPathItems;

	/**
	 * Read-only. The bounds of the object including stroke width and controls.
	 * @const
	 * @type {Number[]} array of 4 numbers
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly controlBounds:Number[];

	/**
	 * Read-only. If <b>true</b>, this item is editable.
	 * @const
	 * @type {Boolean}
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly editable:Boolean;

	/**
	 * Read-only. The bounds of the object excluding stroke width.
	 * @const
	 * @type {Number[]} array of 4 numbers
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly geometricBounds:Number[];

	/**
	 * Read-only. The graph items contained in this group.
	 * @const
	 * @type {GraphItems} {@link GraphItems} collection object
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly graphItems:GraphItems;

	/**
	 * Read-only. The group items contained in this group.
	 * @const
	 * @type {GroupItems} {@link GroupItems} collection object
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly groupItems:GroupItems;

	/**
	 * The height of the group item.
	 * @type {Number} double
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	height:Number;

	/**
	 * If <b>true</b>, this group item is hidden.
	 * @type {Boolean}
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	hidden:Boolean;

	/**
	 * If <b>true</b>, this object is isolated.
	 * @type {Boolean}
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	isIsolated:Boolean;

	/**
	 * Read-only. The layer to which this group item belongs.
	 * @const
	 * @type {Layer} {@link Layer} object
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly layer:Layer;

	/**
	 * The position of the left side of the item.
	 * @type {Number} double
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	left:Number;

	/**
	 * Read-only. The text frame items in this group.
	 * @const
	 * @type {LegacyTextItems}
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly legacyTextItems:LegacyTextItems;

	/**
	 * If <b>true</b>, this group item is locked.
	 * @type {Boolean}
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	locked:Boolean;

	/**
	 * Read-only. The mesh items contained in this group.
	 * @const
	 * @type {MeshItems} {@link MeshItems} collection object
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly meshItems:MeshItems;

	/**
	 * The name of this group item.
	 * @type {String}
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	name:String;

	/**
	 * The opacity of the object. Range: 0.0 to 100.0
	 * @type {Number} double
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	opacity:Number;

	/**
	 * Read-only. The page items (all art item classes) contained in this group.
	 * @const
	 * @type {PageItems} {@link PageItems} collection object
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly pageItems:PageItems;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Layer|GroupItem} {@link Layer} object or {@link GroupItem} object
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Layer|GroupItem;

	/**
	 * Read-only. The path items contained in this group.
	 * @const
	 * @type {PathItems} {@link PathItems} collection object
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly pathItems:PathItems;

	/**
	 * Read-only. The placed items contained in this group.
	 * @const
	 * @type {PlacedItems} {@link PlacedItems} collection object
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly placedItems:PlacedItems;

	/**
	 * Read-only. The plugin items contained in this group.
	 * @const
	 * @type {PluginItems} {@link PluginItems} collection object
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly pluginItems:PluginItems;

	/**
	 * The position of the top left corner of the group item.
	 * @type {Number[]} array of 2 numbers
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	position:Number[];

	/**
	 * Read-only. The raster items contained in this group.
	 * @const
	 * @type {RasterItems} {@link RasterItems} collection object
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly rasterItems:RasterItems;

	/**
	 * If <b>true</b>, this group item is selected.
	 * @type {Boolean}
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	selected:Boolean;

	/**
	 * If <b>true</b>, the item sliced. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	sliced:Boolean;

	/**
	 * Read-only. The symbol item objects in this group.
	 * @const
	 * @type {SymbolItems} {@link SymbolItems} collection object
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly symbolItems:SymbolItems;

	/**
	 * Read-only. The tags contained in this group.
	 * @const
	 * @type {Tags} {@link Tags} collection object
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly tags:Tags;

	/**
	 * Read-only. The text art items contained in this group.
	 * @const
	 * @type {TextFrames} {@link TextFrames} collection object
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly textFrames:TextFrames;

	/**
	 * The position of the top of the item.
	 * @type {Number} double
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	top:Number;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * The value of the Adobe URL tag assigned to this group item.
	 * @type {String}
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	uRL:String;

	/**
	 * The visibility variable bound to the item.
	 * @type {Variable} {@link Variable} object
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	visibilityVariable:Variable;

	/**
	 * Read-only. The visible bounds of the group item including stroke width.
	 * @const
	 * @type {Number[]} array of 4 numbers
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly visibleBounds:Number[];

	/**
	 * The width of the group item.
	 * @type {Number} double
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	width:Number;

	/**
	 * If <b>true</b>, the text frame object should be wrapped inside this object.
	 * @type {Boolean}
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	wrapInside:Boolean;

	/**
	 * The offset to use when wrapping text around this object.
	 * @type {Number} double
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	wrapOffset:Number;

	/**
	 * If <b>true</b>, wrap text frame objects around this object (text frame must be above the object).
	 * @type {Boolean}
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	wrapped:Boolean;

	/**
	 * Read-only. The position of this group object within the stacking order of the group or layer (parent) that contains the group object.
	 * @const
	 * @type {Number} long
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly zOrderPosition:Number;

	/**
	 * Creates a duplicate of the selected object.
	 * @param {Object} [relativeObject] {@link Object}
	 * @param {ElementPlacement} [insertionLocation] {@link ElementPlacement}
	 * @return {GroupItem} {@link GroupItem} object
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	duplicate(relativeObject?:Object, insertionLocation?:ElementPlacement):GroupItem;

	/**
	 * Moves the object.
	 * @param {Object} relativeObject {@link Object}
	 * @param {ElementPlacement} insertionLocation {@link ElementPlacement}
	 * @return {GroupItem} {@link GroupItem} object
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	move(relativeObject:Object, insertionLocation:ElementPlacement):GroupItem;

	/**
	 * Deletes this object.
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	remove():void;

	/**
	 * Scales the art item where <b>scaleX</b> is the horizontal scaling factor and <b>scaleY</b> is the vertical scaling factor. 100.0 = 100%.
	 * @param {Number} scaleX {@link Number} double
	 * @param {Number} scaleY {@link Number} double
	 * @param {Boolean} [changePositions] {@link Boolean}
	 * @param {Boolean} [changeFillPatterns] {@link Boolean}
	 * @param {Boolean} [changeFillGradients] {@link Boolean}
	 * @param {Boolean} [changeStrokePattern] {@link Boolean}
	 * @param {Number} [changeLineWidths] {@link Number} double
	 * @param {Transformation} [scaleAbout] {@link Transformation}
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	resize(scaleX:Number, scaleY:Number, changePositions?:Boolean, changeFillPatterns?:Boolean, changeFillGradients?:Boolean, changeStrokePattern?:Boolean, changeLineWidths?:Number, scaleAbout?:Transformation):void;

	/**
	 * Rotates the art item relative to the current rotation. The object is rotated counter-clockwise if the angle value is positive, clockwise if the value is negative.
	 * @param {Number} angle {@link Number} double
	 * @param {Boolean} [changePositions] {@link Boolean}
	 * @param {Boolean} [changeFillPatterns] {@link Boolean}
	 * @param {Boolean} [changeFillGradients] {@link Boolean}
	 * @param {Boolean} [changeStrokePattern] {@link Boolean}
	 * @param {Transformation} [scaleAbout] {@link Transformation}
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	rotate(angle:Number, changePositions?:Boolean, changeFillPatterns?:Boolean, changeFillGradients?:Boolean, changeStrokePattern?:Boolean, scaleAbout?:Transformation):void;

	/**
	 * Transforms the art item by applying a transformation matrix.
	 * @param {Matrix} transformationMatrix {@link Matrix} object
	 * @param {Boolean} [changePositions] {@link Boolean}
	 * @param {Boolean} [changeFillPatterns] {@link Boolean}
	 * @param {Boolean} [changeFillGradients] {@link Boolean}
	 * @param {Boolean} [changeStrokePattern] {@link Boolean}
	 * @param {Number} [changeLineWidths] {@link Number} double
	 * @param {Transformation} [scaleAbout] {@link Transformation}
	 * @see {@link GroupItem}
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
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	translate(deltaX?:Number, deltaY?:Number, transformObjects?:Boolean, transformFillPatterns?:Boolean, transformFillGradients?:Boolean, transformStrokePatterns?:Boolean):void;

	/**
	 * Arranges the art item’s position in the stacking order of the group or layer (parent) of this object.
	 * @param {ZOrderMethod} zOrderCmd {@link ZOrderMethod}
	 * @see {@link GroupItem}
	 * @since CS2
	 * @version CS2
	 */
	zOrder(zOrderCmd:ZOrderMethod):void;
}