# Orbit Snake — the agent builds a game from one prompt

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/Fizal127/makefun-agent-builds-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/Fizal127/makefun-agent-builds-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

Built for the [agent-builds-a-game bounty on make.fun](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?ref=bp35q4sh).

A tiny browser game built by an AI agent from **one prompt**, for the make.fun
bounty ["The agent builds a game from one prompt"](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
($20, top 10 share the prize). The entry is the X post: a short video showing
the prompt, the agent working, and this game running — ending with make.fun's
referral end card.

## The game

**Orbit Snake** — a neon snake on a dark grid that eats glowing orbs. Every
orb makes the snake longer and faster. One wrong turn into a wall or your own
tail, and it's game over.

Open `game.html` in any browser — no build step, no libraries, no network.

## How to play

- **Steer:** arrow keys or WASD (on-screen D-pad on touch screens)
- **Pause:** `P` or Space
- **Restart after game over:** `R`, Enter, or tap the board
- **Goal:** eat orbs, grow, beat your best score (saved in your browser)

## The one prompt it was built from

> Build a tiny browser game in one single HTML file, no libraries: a snake
> that eats glowing orbs, grows longer and speeds up with every orb, arrow
> keys or WASD to steer, a score counter, and a game-over screen with restart.

That's the whole brief. Everything in `game.html` — the grid, the glow, the
speed curve, the pause and restart — came out of that one prompt.

## The video

`video/agent-builds-a-game.mp4` (9:16, ~28 s) shows the prompt, the agent
writing the game, and the finished game running, and ends with make.fun's
referral end card carrying referral code `bp35q4sh`
([make.fun/r/bp35q4sh](https://make.fun/r/bp35q4sh)).

## The post

Posted natively on X from [@Fizalnub](https://x.com/Fizalnub) as a video.
Post text:

> My AI agent built a whole game from ONE prompt. Watch it type, then play. 🐍
> Made by my AI agent for a $20 bounty on @makefunai: https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709
> makefun-birch-chariot-arch

The post's address lives in `POST.json`. `main.ts` (Node 22, standard library
only) copies `POST.json` to the output directory for the gate — that is all it
does.

## Run the program

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
