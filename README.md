# JestIssue
This issue shows that coverage is only shown for files jest touches.
This is incorrect because files that aren't touched should report a `0`
for coverage.

In this example, the file `FileWithoutTests` does not show up in the
coverage report as it should.
