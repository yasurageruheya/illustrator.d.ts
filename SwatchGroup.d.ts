/**
 * A group of {@link Swatch} objects.
 *
 * @since CS4
 * @version CS4
 *
 * <b>Properties</b>
 * ･ {@link name}
 * ･ {@link parent}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 * ･ {@link addSpot}
 * ･ {@link addSwatch}
 * ･ {@link getAllSwatches}
 * ･ {@link remove}
 * ･ {@link removeAll}
 */
declare class SwatchGroup
{
	/**
	 * The name of the swatch group.
	 * @type {String}
	 * @see {@link SwatchGroup}
	 * @since CS4
	 * @version CS4
	 */
	name:String;

	/**
	 * Read-only. The object that contains the {@link Symbol} object.
	 * @const
	 * @type {Object}
	 * @see {@link SwatchGroup}
	 * @since CS4
	 * @version CS4
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link SwatchGroup}
	 * @since CS4
	 * @version CS4
	 */
	readonly typename:String;

	/**
	 * Adds a spot swatch to the swatch group.
	 * @param {Spot} spot {@link Spot} object
	 * @see {@link SwatchGroup}
	 * @since CS4
	 * @version CS4
	 */
	addSpot(spot:Spot):void;

	/**
	 * Adds a swatch to the swatch group.
	 * @param {Swatch} swatch {@link Swatch} object
	 * @see {@link SwatchGroup}
	 * @since CS4
	 * @version CS4
	 */
	addSwatch(swatch:Swatch):void;

	/**
	 * Gets a list of all swatches in the swatch group.
	 * @return {Swatch[]} List of {@link Swatch}
	 * @see {@link SwatchGroup}
	 * @since CS4
	 * @version CS4
	 */
	getAllSwatches():Swatch[];

	/**
	 * Deletes this object.
	 * @see {@link SwatchGroup}
	 * @since CS4
	 * @version CS4
	 */
	remove():void;

	/**
	 * Deletes all elements in the collection.
	 * @see {@link SwatchGroup}
	 * @since CS4
	 * @version CS4
	 */
	removeAll():void;
}