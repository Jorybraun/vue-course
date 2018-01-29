const root = process.env.PWD;
const build = `${root}/build`;
const src = `${root}/src`;
const entry = `${src}/client/index.js`;

console.log(build);

module.exports = {
    root,
    build,
    src,
    entry
}