import { DeskToolOptions, ListItemBuilder } from "sanity/desk"

const hiddenDocTypes = (listItem: ListItemBuilder) => ![
  'me',
  'sankey'
].includes(listItem.getId() ?? '')

const customDeskTool: DeskToolOptions = {
  structure: (S) =>
    S.list()
      .title('Content')
      .items([
        S.listItem()
          .title('Me')
          .id('me')
          .child(
            S.document()
              .schemaType('me')
              .documentId('me')
          ),
        S.listItem()
          .title('Sankey Diagram')
          .id('sankey')
          .child(
            S.document()
              .schemaType('sankey')
              .documentId('89161d10-edc4-4e57-bd30-0c73559e3e2c')
          ),
        ...S.documentTypeListItems().filter(hiddenDocTypes)
      ])
}

export default customDeskTool
