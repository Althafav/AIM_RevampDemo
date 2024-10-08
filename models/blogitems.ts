
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.0.0'
 * Timestamp: Mon Oct 10 2022 16:01:57 GMT+0500 (Pakistan Standard Time)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Blogitems extends ContentItem {
    public heading!: Elements.TextElement;
    public date!: Elements.TextElement;
    public image!: Elements.AssetsElement;
    public ctas!: Elements.LinkedItemsElement<ContentItem>;
    public metaDescription!: Elements.TextElement;
    public pageTitle!: Elements.TextElement;
    public metaTitle!: Elements.TextElement;
    public chooseArticle!: Elements.NumberElement;
    public content!: Elements.RichTextElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'meta_description') {
                    return 'metaDescription';
                }
                if (elementName === 'page_title') {
                    return 'pageTitle';
                }
                if (elementName === 'meta_title') {
                    return 'metaTitle';
                }
                if (elementName === 'choose_article') {
                    return 'chooseArticle';
                }
                return elementName;
            })
        });
    }
}
