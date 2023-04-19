module.exports = {
  extends: '@istanbuljs/nyc-config-typescript',
  exclude: ['src/app/api/Database', 'src/app/api/Interfaces'],
  include: [
    "src/app/**/*.ts"
  ],
  reporter: ['text', 'text-summary', 'json-summary', 'html', 'lcov'],
  all: true,
};
