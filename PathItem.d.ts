/**
 * Specifies a path item, which contains {@link PathPoint} objects that define its geometry. The {@link PathItem} class gives you complete access to paths in Illustrator. The {@link PathItem#setEntirePath} method provides an extremely efficient way to create paths comprised of straight lines.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link area}
 * ･ {@link artworkKnockout}
 * ･ {@link blendingMode}
 * ･ {@link clipping}
 * ･ {@link closed}
 * ･ {@link controlBounds}
 * ･ {@link editable}
 * ･ {@link evenodd}
 * ･ {@link fillColor}
 * ･ {@link filled}
 * ･ {@link fillOverprint}
 * ･ {@link geometricBounds}
 * ･ {@link guides}
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
 * ･ {@link pathPoints}
 * ･ {@link polarity}
 * ･ {@link position}
 * ･ {@link resolution}
 * ･ {@link selected}
 * ･ {@link selectedPathPoints}
 * ･ {@link sliced}
 * ･ {@link strokeCap}
 * ･ {@link strokeColor}
 * ･ {@link stroked}
 * ･ {@link strokeDashes}
 * ･ {@link strokeDashOffset}
 * ･ {@link strokeJoin}
 * ･ {@link strokeMiterLimit}
 * ･ {@link strokeOverprint}
 * ･ {@link strokeWidth}
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
 * ･ {@link setEntirePath}
 * ･ {@link transform}
 * ･ {@link translate}
 * ･ {@link zOrder}
 *
 * @example
 * ➤ Setting colors in a path
 *    This script sets the stroke color and the fill color of the first path in the frontmost document.
 *      // Set the stroke and fill of a PathItem to colors of a randomly selected swatch
 *      if (app.documents.length > 0 && app.activeDocument.pathItems.length > 0) {
 *          doc = app.activeDocument;
 *          for (i = 0; i < doc.pathItems.length; i++) {
 *              pathRef = doc.pathItems[i];
 *              pathRef.filled = true;
 *              pathRef.stroked = true;
 *              swatchIndex = Math.round(Math.random() * (doc.swatches.length - 1));
 *              pathRef.fillColor = doc.swatches[swatchIndex].color;
 *              pathRef.strokeColor = doc.swatches[swatchIndex].color;
 *          }
 *      }
 *
 * ➤ Creating a path from straight lines
 *    This script illustrates the use of the setEntirePath method to create a new path consisting of straight lines.
 *      // Create a new open path consisting of 10 straight lines
 *      if (app.documents.length > 0) {
 *          var lineList = new Array(10);
 *          for (i = 0; i < lineList.length; i++) {
 *              lineList[i] = new Array(((i - 5) ^ 2) * 5 + 50);
 *          }
 *          app.defaultStroked = true;
 *          newPath = app.activeDocument.pathItems.add();
 *          newPath.setEntirePath(lineList);
 *      }
 */
declare class PathItem extends PageItem
{
	/**
	 * Read-only. The area of this path in square points. If the area is negative, the path is wound counterclockwise. Self-intersecting paths can contain sub-areas that cancel each other out, which makes this value zero even though the path has apparent area.
	 * @const
	 * @type {Number} double
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly area:Number;

	/**
	 * Is this object used to create a knockout, and if so, what kind of knockout.
	 * @type {KnockoutState}
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	artworkKnockout:KnockoutState;

	/**
	 * The blend mode used when compositing an object.
	 * @type {BlendModes}
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	blendingMode:BlendModes;

	/**
	 * If <b>true</b>, this path should be used as a clipping path.
	 * @type {Boolean}
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	clipping:Boolean;

	/**
	 * If <b>true</b>, this path is closed.
	 * @type {Boolean}
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	closed:Boolean;

	/**
	 * Read-only. The bounds of the object including stroke width and controls.
	 * @const
	 * @type {Number[]} array of 4 numbers
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly controlBounds:Number[];

	/**
	 * Read-only. If <b>true</b>, this item is editable.
	 * @const
	 * @type {Boolean}
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly editable:Boolean;

	/**
	 * If <b>true</b>, the even-odd rule should be used to determine insideness.
	 * @type {Boolean}
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	evenodd:Boolean;

	/**
	 * The fill color of the path.
	 * @type {Color} {@link Color} object
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	fillColor:Color;

	/**
	 * If <b>true</b>, the path be filled.
	 * @type {Boolean}
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	filled:Boolean;

	/**
	 * If <b>true</b>, the art beneath a filled object should be overprinted.
	 * @type {Boolean}
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	fillOverprint:Boolean;

	/**
	 * Read-only. The bounds of the object excluding stroke width.
	 * @const
	 * @type {Number[]} array of 4 numbers
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly geometricBounds:Number[];

	/**
	 * If <b>true</b>, this path is a guide object.
	 * @type {Boolean}
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	guides:Boolean;

	/**
	 * The height of the group item.
	 * @type {Number} double
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	height:Number;

	/**
	 * If <b>true</b>, this item is hidden.
	 * @type {Boolean}
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	hidden:Boolean;

	/**
	 * If <b>true</b>, this object is isolated.
	 * @type {Boolean}
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	isIsolated:Boolean;

	/**
	 * Read-only. The layer to which this item belongs.
	 * @const
	 * @type {Layer} {@link Layer} object
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly layer:Layer;

	/**
	 * The position of the left side of the item.
	 * @type {Number} double
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	left:Number;

	/**
	 * If <b>true</b>, this item is locked.
	 * @type {Boolean}
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	locked:Boolean;

	/**
	 * The name of this item.
	 * @type {String}
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	name:String;

	/**
	 * The note text assigned to the path.
	 * @type {String}
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	note:String;

	/**
	 * The opacity of the object. Range: 0.0 to 100.0
	 * @type {Number}
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	opacity:Number;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Layer|GroupItem} {@link Layer} or {@link GroupItem} object
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Layer|GroupItem;

	/**
	 * Read-only. The path points contained in this path item.
	 * @const
	 * @type {PathPoints|PathPoint[]} {@link PathPoints} collection object
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly pathPoints:PathPoints|PathPoint[];

	/**
	 * The polarity of the path.
	 * @type {PolarityValues} {@link PolarityValues} object
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	polarity:PolarityValues;

	/**
	 * The position of the top left corner of the item.
	 * @type {Number[]} array of 2 numbers
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	position:Number[];

	/**
	 * The resolution of the path in dots per inch (dpi).
	 * @type {Number} double
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	resolution:Number;

	/**
	 * If <b>true</b>, this compound path item is selected.
	 * @type {Boolean}
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	selected:Boolean;

	/**
	 * Read-only. All of the selected path points in the path.
	 * @type {PathPoints|PathPoint[]} {@link PathPoints} collection object
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly selectedPathPoints:PathPoints|PathPoint[];

	/**
	 * If <b>true</b>, the item is sliced. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	sliced:Boolean;

	/**
	 * The type of line capping.
	 * @type {StrokeCap}
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	strokeCap:StrokeCap;

	/**
	 * The stroke color for the path.
	 * @type {Color} {@link Color} object
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	strokeColor:Color;

	/**
	 * If <b>true</b>, the path should be stroked.
	 * @type {Boolean}
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	stroked:Boolean;

	/**
	 * Dash lengths. Set to an empty object, {}, for a solid line.
	 * @type {Object}
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	strokeDashes:Object;

	/**
	 * The default distance into the dash pattern at which the pattern should be started.
	 * @type {Number} double
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	strokeDashOffset:Number;

	/**
	 * Type of joints for the path.
	 * @type {StrokeJoin}
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	strokeJoin:StrokeJoin;

	/**
	 * When a default stroke join is set to {@link StrokeJoin.MITEREDJOIN}, this property specifies when the join will be converted to beveled (squared-off ) by default. The default miter limit of 4 means that when the length of the point reaches four times the stroke weight, the join switches from a miter join to a bevel join. A value of 1 specifies a bevel join. Range: 1 to 500 Default: 4
	 * @type {Number} double
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	strokeMiterLimit:Number;

	/**
	 * If <b>true</b>, the art beneath a stroked object should be overprinted.
	 * @type {Boolean}
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	strokeOverprint:Boolean;

	/**
	 * Width of the stroke.
	 * @type {Number} double
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	strokeWidth:Number;

	/**
	 * Read-only. The tags contained in this item.
	 * @const
	 * @type {Tags|Tag[]} {@link Tags} collection object
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly tags:Tags|Tag[];

	/**
	 * The position of the top of the item.
	 * @type {Number} double
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	top:Number;

	/**
	 * Read-only. class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * The value of the Adobe URL tag assigned to this item.
	 * @type {String}
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	uRL:String;

	/**
	 * The visibility variable bound to the item.
	 * @type {Variable} {@link Variable} object
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	visibilityVariable:Variable;

	/**
	 * Read-only. The visible bounds of the compound path item including stroke width.
	 * @const
	 * @type {Number[]} array of 4 numbers
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly visibleBounds:Number[];

	/**
	 * The width of the item.
	 * @type {Number} double
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	width:Number;

	/**
	 * If <b>true</b>, the text frame object should be wrapped inside this object.
	 * @type {Boolean}
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	wrapInside:Boolean;

	/**
	 * The offset to use when wrapping text around this object.
	 * @type {Number} double
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	wrapOffset:Number;

	/**
	 * If <b>true</b>, wrap text frame objects around this object (text frame must be above the object).
	 * @type {Boolean}
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	wrapped:Boolean;

	/**
	 * Read-only. The position of this item within the stacking order of the group or layer (parent) that contains the item.
	 * @const
	 * @type {Number} long
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	readonly zOrderPosition:Number;

	/**
	 * Creates a duplicate of the selected object.
	 * @param {Object} [relativeObject] {@link Object}
	 * @param {ElementPlacement} [insertionLocation] {@link ElementPlacement}
	 * @return {MeshItem} {@link MeshItem} object
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	duplicate(relativeObject?:Object, insertionLocation?:ElementPlacement):MeshItem;

	/**
	 * Moves the object.
	 * @param {Object} relativeObject {@link Object}
	 * @param {ElementPlacement} insertionLocation {@link ElementPlacement}
	 * @return {MeshItem} {@link MeshItem} object
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	move(relativeObject:Object, insertionLocation:ElementPlacement):MeshItem;

	/**
	 * Deletes this object.
	 * @see {@link PathItem}
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
	 * @see {@link PathItem}
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
	 * @param {Transformation} [rotateAbout] {@link Transformation}
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	rotate(angle:Number, changePositions?:Boolean, changeFillPatterns?:Boolean, changeFillGradients?:Boolean, changeStrokePattern?:Boolean, rotateAbout?:Transformation):void;

	/**
	 * Sets the path using the specified anchor points.
	 * @param {PathPoints|PathPoint[]} pathPoints {@link PathPoints} object
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	setEntirePath(pathPoints:PathPoints):void;

	/**
	 * Transforms the art item by applying a transformation matrix.
	 * @param {Matrix} transformationMatrix {@link Matrix} object
	 * @param {Boolean} [changePositions] {@link Boolean}
	 * @param {Boolean} [changeFillPatterns] {@link Boolean}
	 * @param {Boolean} [changeFillGradients] {@link Boolean}
	 * @param {Boolean} [changeStrokePattern] {@link Boolean}
	 * @param {Number} [changeLineWidths] {@link Number} double
	 * @param {Transformation} [transformAbout] {@link Transformation}
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	transform(transformationMatrix:Matrix, changePositions?:Boolean, changeFillPatterns?:Boolean, changeFillGradients?:Boolean, changeStrokePattern?:Boolean, changeLineWidths?:Number, transformAbout?:Transformation):void;

	/**
	 * Repositions the art item relative to the current position, where deltaX is the horizontal offset and deltaY is the vertical offset.
	 * @param {Number} [deltaX] {@link Number} double
	 * @param {Number} [deltaY] {@link Number} double
	 * @param {Boolean} [transformObjects] {@link Boolean}
	 * @param {Boolean} [transformFillPatterns] {@link Boolean}
	 * @param {Boolean} [transformFillGradients] {@link Boolean}
	 * @param {Boolean} [transformStrokePatterns] {@link Boolean}
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	translate(deltaX?:Number, deltaY?:Number, transformObjects?:Boolean, transformFillPatterns?:Boolean, transformFillGradients?:Boolean, transformStrokePatterns?:Boolean):void;

	/**
	 * Arranges the art item’s position in the stacking order of the group or layer (parent) of this object.
	 * @param {ZOrderMethod} zOrderCmd {@link ZOrderMethod}
	 * @see {@link PathItem}
	 * @since CS2
	 * @version CS2
	 */
	zOrder(zOrderCmd:ZOrderMethod):void;
}