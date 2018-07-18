/**
 * A location between characters that is used to insert new text objects. An insertion point is contained in an {@link InsertionPoints} collection.
 *
 * @since CS2
 * @version CS5
 *
 * <b>Properties</b>
 * ･ {@link characters}
 * ･ {@link lines}
 * ･ {@link paragraphs}
 * ･ {@link parent}
 * ･ {@link story}
 * ･ {@link textRanges}
 * ･ {@link typename}
 * ･ {@link words}
 */
declare class InsertionPoint
{
	/**
	 * Read-only. All the characters in this text range.
	 * @const
	 * @type {Characters|TextRange[]} {@link Characters} collection object
	 * @see {@link InsertionPoint}
	 * @since CS5
	 * @version CS5
	 */
	readonly characters:Characters|TextRange[];

	/**
	 * Read-only. All the lines in this text range.
	 * @const
	 * @type {Lines|TextRange[]} {@link Lines} collection object
	 * @see {@link InsertionPoint}
	 * @since CS5
	 * @version CS5
	 */
	readonly lines:Lines;

	/**
	 * Read-only. All the paragraphs in this text range.
	 * @const
	 * @type {Paragraphs|TextRange[]} {@link Paragraphs} collection object
	 * @see {@link InsertionPoint}
	 * @since CS5
	 * @version CS5
	 */
	readonly paragraphs:Paragraphs|TextRange[];

	/**
	 * Read-only. The object’s container.
	 * @const
	 * @type {TextRange} {@link TextRange} object
	 * @see {@link InsertionPoint}
	 * @since CS5
	 * @version CS5
	 */
	readonly parent:TextRange;

	/**
	 * Read-only. The story to which the text range belongs.
	 * @const
	 * @type {Story} {@link Story} object
	 * @see {@link InsertionPoint}
	 * @since CS5
	 * @version CS5
	 */
	readonly story:Story;

	/**
	 * Read-only. All of the text in this text range.
	 * @const
	 * @type {TextRanges|TextRange[]} {@link TextRanges} collection object
	 * @see {@link InsertionPoint}
	 * @since CS5
	 * @version CS5
	 */
	readonly textRanges:TextRanges|TextRange[];

	/**
	 * Read-only. The class name o f the object.
	 * @const
	 * @type {String}
	 * @see {@link InsertionPoint}
	 * @since CS5
	 * @version CS5
	 */
	readonly typename:String;

	/**
	 * Read-only. All the words contained in this text range.
	 * @const
	 * @type {Words|TextRange[]} {@link Words} collection object
	 * @see {@link InsertionPoint}
	 * @since CS5
	 * @version CS5
	 */
	readonly words:Words|TextRange[];
}