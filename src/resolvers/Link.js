const postedBy = (parent, args, context) =>
  context.prisma.link({ id: parent.id }).postedBy();

const votes = (parents, args, context) =>
  context.prisma.link({ id: parent.id }).votes();

module.exports = { postedBy, votes };
