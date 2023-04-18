module.exports = {
  extends: '@istanbuljs/nyc-config-typescript',
  include: [
    'src/app/api/Database/Models',
    'src/app/api/Services',
    'src/app/api/Controllers',
  ],
  reporter: ['text', 'text-summary', 'json-summary', 'html', 'lcov'],
  all: true,
};
