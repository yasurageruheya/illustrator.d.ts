/**
 * A path or list of paths for area or path text. A path consists of path points that define its geometry.
 *
 * @since CS2
 * @version CS3
 *
 * <b>Properties</b>
 * ･ {@link area}
 * ･ {@link blendingMode}
 * ･ {@link clipping}
 * ･ {@link editable}
 * ･ {@link evenodd}
 * ･ {@link fillColor}
 * ･ {@link filled}
 * ･ {@link fillOverprint}
 * ･ {@link guides}
 * ･ {@link height}
 * ･ {@link left}
 * ･ {@link note}
 * ･ {@link opacity}
 * ･ {@link parent}
 * ･ {@link pathPoints}
 * ･ {@link polarity}
 * ･ {@link position}
 * ･ {@link resolution}
 * ･ {@link selectedPathPoints}
 * ･ {@link strokeCap}
 * ･ {@link strokeColor}
 * ･ {@link stroked}
 * ･ {@link strokeDashes}
 * ･ {@link strokeDashOffset}
 * ･ {@link strokeJoin}
 * ･ {@link strokeMiterLimit}
 * ･ {@link strokeOverprint}
 * ･ {@link strokeWidth}
 * ･ {@link top}
 * ･ {@link typename}
 * ･ {@link width}
 *
 * <b>Methods</b>
 * ･ {@link setEntirePath}
 */
declare class TextPath
{
	/**
	 * Read-only. The area of this path in square points. If the area is negative, the path is wound counterclockwise.
	 * Self-intersecting paths can contain sub-areas that cancel each other out, which makes this value zero even though the path has apparent area.
	 * @const
	 * @type {Number} double
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	readonly area:Number;

	/**
	 * The blend mode used when compositing an object.
	 * @type {BlendModes}
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	blendingMode:BlendModes;

	/**
	 * If <b>true</b>, this path should be used as a clipping path.
	 * @type {Boolean}
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	clipping:Boolean;

	/**
	 * Read-only. If <b>true</b>, this item is editable.
	 * @const
	 * @type {Boolean}
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	readonly editable:Boolean;

	/**
	 * If <b>true</b>, the even-odd rule should be used to determine insideness.
	 * @type {Boolean}
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	evenodd:Boolean;

	/**
	 * The fill color of the path.
	 * @type {Color} {@link Color} object
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	fillColor:Color;

	/**
	 * If <b>true</b>, the path be {@link filled}.
	 * @type {Boolean}
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	filled:Boolean;

	/**
	 * If <b>true</b>, the art beneath a {@link filled} object should be overprinted.
	 * @type {Boolean}
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	fillOverprint:Boolean;

	/**
	 * If <b>true</b>, this path is a guide object.
	 * @type {Boolean}
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	guides:Boolean;

	/**
	 * The height of the group item.
	 * @type {Number} double
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	height:Number;

	/**
	 * The position of the left side of the item (in points, measured from the left side of the page).
	 * @type {Number} double
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	left:Number;

	/**
	 * The note text assigned to the path.
	 * @type {String}
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	note:String;

	/**
	 * The opacity of the object. Range: <b>0.0 to 100.0</b>.
	 * @type {Number}
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	opacity:Number;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Layer|GroupItem} {@link Layer} or {@link GroupItem} object
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Layer|GroupItem;

	/**
	 * Read-only. The path points contained in this path item.
	 * @const
	 * @type {PathPoints} {@link PathPoints} collection object
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	readonly pathPoints:PathPoints;

	/**
	 * The polarity of the path.
	 * @type {PolarityValues} {@link PolarityValues} object
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	polarity:PolarityValues;

	/**
	 * The position (in points) of the top left corner of the textPathItem object in the format [x, y]. Does not include stroke weight.
	 * @type {Number[]} array of 2 numbers
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	position:Number[];

	/**
	 * The resolution of the path in dots per inch (dpi).
	 * @type {Number} double
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	resolution:Number;

	/**
	 * Read-only. All of the selected path points in the path.
	 * @type {PathPoints} {@link PathPoints} collection object
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	readonly selectedPathPoints:PathPoints;

	/**
	 * The type of line capping.
	 * @type {StrokeCap}
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	strokeCap:StrokeCap;

	/**
	 * The stroke color for the path.
	 * @type {Color} {@link Color} object
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	strokeColor:Color;

	/**
	 * If <b>true</b>, the path should be {@link stroked}.
	 * @type {Boolean}
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	stroked:Boolean;

	/**
	 * Dash lengths. Set to an empty object, {}, for a solid line.
	 * @type {Object}
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	strokeDashes:Object;

	/**
	 * The default distance into the dash pattern at which the pattern should be started.
	 * @type {Number} double
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	strokeDashOffset:Number;

	/**
	 * Type of joints for the path.
	 * @type {StrokeJoin}
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	strokeJoin:StrokeJoin;

	/**
	 * When a default stroke join is set to {@link StrokeJoin.MITERENDJOIN}, this property specifies when the join will be converted to beveled (squared-off) by default. The default miter limit of 4 means that when the <b>length</b> of the point reaches four times the stroke weight, the join switches from a miter join to a bevel join. A value of 1 specifies a bevel join. Range: <b>1 to 500</b>. Default: <b>4</b>
	 * @type {Number} double
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	strokeMiterLimit:Number;

	/**
	 * If <b>true</b>, the art beneath a {@link stroked} object should be overprinted.
	 * @type {Boolean}
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	strokeOverprint:Boolean;

	/**
	 * Width of the stroke.
	 * @type {Number} double
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	strokeWidth:Number;

	/**
	 * The position of the top of the item (in points, measured from the bottom of the page).
	 * @type {Number} double
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	top:Number;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * The width of the item.
	 * @type {Number} double
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS2
	 */
	width:Number;

	/**
	 * Sets the path using the array of points specified as [x, y] coordinate pairs.
	 * @param {Number[]} pathPoints array of[x, y] coordinate pairs
	 * @see {@link TextPath}
	 * @since CS2
	 * @version CS3
	 */
	setEntirePath(pathPoints:Number[]):void;
}