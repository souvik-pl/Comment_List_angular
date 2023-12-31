import { IComment } from "../interfaces/comment.interface";

export const DUMMY_COMMENTS: IComment[] = [
  {
    commentId: "c2",
    parentId: null,
    ownerId: "o4",
    ownerName: "Emily Johnson",
    ownerAvatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAMgAyAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAB0AHQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAlEAACAgIBAwQDAQAAAAAAAAAAAQIRAzEhEkFRBCIyYRNxkaH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AOYAGRCJLJa5ABrkR0ekXMmVWf4clX0szladNUzvyfE5Jyd+5WgJiqQwQyIRLZTJewEaQ+JBWPuBdAAAZJMqhicq7WAU90J0+epEuTltiKK9vl/w1x51jjSjf3ZgAVvL1HVuP+mbnFqnF/0igqgKTS8lKSMwAtuhElIIBw+QgTp2BqAWBBNETXI7BtNAQAD1EqlRrhxdbt6JjydOKUUq5/hFUsaS4RGTGmjZulZk53wlX7ZBySj0uhG2dcWZNcFQio6JLSpFCEyiWQXFrp5YGdgEPkKGAEjG1YuxVVi+RvHHK7bMcFPKkzt0iKT0ZPFbs1b4BaIMpw9qRz5flXhG2ebilRz75ZYUR2UStlBkEsp6JAQDAoYCGQMUtjABQfTNPwd12k4s4pR4Xk0xZXBqPbwKsaSWa/kVBSS9ztlddrQnyRpzeolckvBma51TTMrLGaFsokbYQPYgsa+yqKAaquXQERAWypRrQopydIqi2Vj90udD6Etm+BRjFum2/HYDKSfffgzummdGVdStU/tGDQHVDlF0Z4X7FZpZFRkgpKmcs8cob15Oxv6Cm1oDgGbZYRTpLkz6UVEpA2NpolhFLQCWgIDqZpj5TZka403GkrbZVaYVc7atfo6eIx1SRGHF0q5JWGd6iu4GTbyOTXFLfkxfHLOvp6YOvByT++wGsMkfNGqlF90ciKQw11Wl3RE8ySqPLMBjDSlb5YA1wIqHszkqZa7CnoglaAAAR0+mXF9wAK6b4/RnP5IAAc37TkmAAJDACoYwAAkT3AABaQpaACCQAAP/2Q==",
    commentTime: 1697744768397,
    commentText: 'Going for a trip this weekend. Wanna join me?',
    replyList: []
  },
  {
    commentId: "c1",
    parentId: null,
    ownerId: "o1",
    ownerName: "John Smith",
    ownerAvatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAMgAyAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCABcAFwDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAIDBAEF/8QAKBAAAgIBAwMEAgMBAAAAAAAAAAECEQMSIUEEMWETIlGRQnEUI4Ey/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABkRAQEBAQEBAAAAAAAAAAAAAAABAhESMf/aAAwDAQACEQMRAD8A2AAABPPl9KF8vsUPPz5PVm9/0Ak8kpy1SdsXUNDFOXZD/wAfJ8AT11JOtzTj6ppJNX5ZCWGa7xYjTSqgPTx5I5F7XuuBjzcUniknyj0ovVFNcqwAAAAAAAXK6xTfhnmwjqkkb+qdYJeTL00blfwBrxx0xocVNIZUyKBJwjJdkOcoDz8sPTyVxwejB3CL8GXqo2o/N0a0qVFSgAAAAAAl1Cbx+DNhg3BtNp+DbNXFkMOyolWJLU1utT/Z1ao9k42aFBcA48bfQElnmo7wvers480m6tL9F3BPHpX+E9HKX0BN3KMW/coyTtGvgljhTSqktypUAAAAAAAEFtNryWnNQjcnsZXP+y+JEqxoTFyz0w1JqyWRuSUYunZxYknUpfYUR6h0le7Ze6JyxRcfx2EhqU2m7SA04+zYxyKqKR0rIAAA45KKtuiU+oS2irZBtt23ZN/8tm/LHXcuX1VV2ys46oURwwv7NVbGK6RljkcZ+7grlnCaQZMSkReKRBTG4JttiTyNt6eX3OxwS/J7A3FPSiz6lbsUtcE+RjHjyOG6NUMil4ZqxJTAAGVYvxFrZLyNx/pzhHVzI4yjJ6XQ+PLOO090E+TkXsiWNStNWrW6DSxeme0lwixzs43KlKL0uu5k02tzfPaDfwjAm9d/LLlnRo3VPuh7Eivcxn3Z0jFWx5mtpbo0Jpq0YF2G1NLZmblZX//Z",
    commentTime: 1697741763847,
    commentText: 'Hey folks!! Whats up',
    replyList: [
      {
        commentId: "c12",
        parentId: "c1",
        ownerId: "o3",
        ownerName: "David Wilson",
        ownerAvatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAMgAyAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCABjAGMDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAEDAgQF/8QAJxAAAgICAgEEAgIDAAAAAAAAAAECESExAxJBBDJRcSJhExRCgaH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AAAYAJtJW9DMzy1H/AGBlOU86XwbigSNpACRqk0NI0kBLpWgKUYkqd/ICGIYAAABgAAAMrPIxt5SW2Zgn2lewKI2ifVvzSGox1HkyBZDJwk9MpdbAZiawPvF+UKegMAAAADACYxDAxN08K28Dj7pfYcj6wb/Rn07uLv5At17fQdVFt1vZqIuRqK/YGIe8tO+uCUFctot9gQj5c4KvlG2qSSyilGZL/gGBiGAAAAYAHS26MqcXp2BP1L/FInxzcPofM+0wjDGWBb+xUcK2T7Snl+Q6pFVH4Azxvo7ds2ue5ZWGbUFXtZGa6t2qQHVCSlEw5XKSIxk4a0zXG7cmwKAAwAAADzpSc5XJ2VcqVEC80pJSWmBK8j7PAmqH4A1G5SzotdEIOmbTfZgXXNIU5fyKnsx2SdAnkBKVfjIpxr4wiEstHRxRqIFBiGAAAAeYW9PK7g/OiI02na2gLcnFbwTqseTqhJckb8+THJxraAghp3KwqrsWkBtO5DTyTumPvfgDaVzSOqKpJEuGH+TLAAxAAwAAPMAAAr6ZtcqXh7OxpAAEuSMbWCE4pS0AAZfga9yAAO5YQAAAMAAAAAP/2Q==",
        commentTime: 1697742801968,
        commentText: 'I am at work. See you in the weekend.',
        replyList: []
      },
      {
        commentId: "c11",
        parentId: "c1",
        ownerId: "o2",
        ownerName: "Jennifer White",
        ownerAvatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAMgAyAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCACTAJMDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAApEAACAgECBQQCAwEAAAAAAAAAAQIRAyExBBITQVEiMmFxQoEUM0OR/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAGBEBAQEBAQAAAAAAAAAAAAAAAAERMUH/2gAMAwEAAhEDEQA/AN6CgGQKgoYyiaCiqCgJoKKIlJR3dAMKMv5ELoUuIS2QG1BRjHiE90axkpK4uwCgooQE0KixARQqLoVARQFUAGwABAwAAAAFJ0mwIy5FBfJxzk5O3qy8kuZ22Z03sgqbdjbpFRx+Ryx2BlzMuE2nadMTxkbMqO/Fl6ip+40OCMnFqSO6ElKKa7gADEQIQwAkBgBY7ObrLyPrLyRXRYWc3XXkOuvIHVZjxE1GBHXXkyzT52q2Az1btmsIixwcn8G3LSCpoGgco37kPQCWjHJE3ZnNaFRmtYnRw89KZzxej+youk6A7OZBzI4epJdx9aQxNdnMhOSORZZA8rYXXVzIDl6jAGswACsmAhgNI35bjtsYpdvJ016o+KM1uLhHlgRlmq1Rs1oYzgnugOeU090KLd+l/otwdjhj1sqKvTUiWRbF5fTE59QU0NMSFZUD3EU9xAACAAAAAAEADGhDW4RpjVs3517W9UY4Sc/uM+tzjsvQTZGN3ii/gGyKG0OGpFOQ3cVo6RUGbY55IucpN/BMtiie4hsT3KyGIctyQGAIdASBVABIAMABAVBWwNsaqNkZdVZonojFu00Z9abcNK4cvguexz4HUjp0kL0jNc6WlEuUu5u1oYSUkwqHPyTJje+pEnZWadg+wgexUU0TRa1iFAShsdAyCbAYFEDEMANIGZpDTUlIuTr/AIY3qy5SuyEnVkjVVi9x0IwxI2FIpzozlkTHLYxluIJnK2ShsqEdLZU6TE9hy3E9ioqDKIjuUQNksYgAAACAGlbN3iWPG5PWRREMUp61S8m2KGP23bFgk3Bp+TOD5c/7GBzgo42/EqLjC8N/AZvZP7L4fXDQw1z4X2Nuxzx0kzVMliw5MyZcmRQVKVsuTpUGyshsJwgYAyoFo0aS7PyZFJuqAp6CLnrFNkMgAEBRcocmKL7s3l68X2icnr4dPwicErjyvsBOB1JryLMuXJaFNcmb9mmZXC/BUVN82OT8qx8K/Q0ZwkumrflCi5YU3S1AJLlztfI9m14HFdRc8t+5M4qE0k9yLAxpCKI0zmQatWZtU6CUITG9FQioCkrh82SVjaumBVt1Ellf6aCeqTAkBgBvh1wtfZji0yIAAriPcvot64v0AFRiv6n9m0tcKvwAALhvyRnP3/TACKtDACKQ2vQwADnAAKgAAAuPuH+CAAEAAB//2Q==",
        commentTime: 1697742703263,
        commentText: 'Chilling with freinds. What about you?',
        replyList: []
      }
    ]
  }
];
