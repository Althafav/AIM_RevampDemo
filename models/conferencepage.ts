
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.0.0'
 * Timestamp: Fri Oct 04 2024 11:36:47 GMT+0400 (Gulf Standard Time)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Conferencepage extends ContentItem {
    public pageTitle!: Elements.TextElement;
    public metaTitle!: Elements.TextElement;
    public metaDescription!: Elements.TextElement;
    public items!: Elements.LinkedItemsElement<ContentItem>;
    public bannerimage!: Elements.AssetsElement;
    public bannerheading!: Elements.TextElement;
    public bannersubheading!: Elements.TextElement;
    public bannerdate!: Elements.TextElement;
    public bannervenue!: Elements.TextElement;
    public bannerbuttons!: Elements.LinkedItemsElement<ContentItem>;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'page_title') {
                    return 'pageTitle';
                }
                if (elementName === 'meta_title') {
                    return 'metaTitle';
                }
                if (elementName === 'meta_description') {
                    return 'metaDescription';
                }
                return elementName;
            })
        });
    }
}