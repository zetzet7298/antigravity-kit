Generate a commit message for the current staged changes.

Look at `git diff --staged` and create a commit message following Conventional Commits format:
- Use appropriate type: feat, fix, docs, style, refactor, test, chore
- Keep the subject line under 50 characters
- Add a body if the changes are complex

Then run `git commit -m "<message>"` with the generated message.
