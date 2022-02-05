import BigNumber from 'bignumber.js';

export const rpcUrl = 'rpcTest';
export const blockResponse = {
  protocol: 'PtGRANADsDU8R9daYKAgWnQYAJ64omN1o3KMGVCykShA97vQbvV',
  chain_id: 'NetXz969SFaFn8k',
  hash: 'BMUMMDZRvvTfLrpmtYMUtYgk498WssaSfNnpkWwEiL7GNTwUYus',
  header: {
    level: 536085,
    proto: 2,
    predecessor: 'BM44sPfEofA59iibf5v5AC1wB1BH2kYi9YsKXHmQeDqZFkMSDD7',
    timestamp: '2021-10-04T18:11:32Z',
    validation_pass: 4,
    operations_hash: 'LLoZRH5DQMZiuE5eZ588fFC9JkL7qN8QjMdTUWQAHcAut2BmoUGZM',
    fitness: ['01', '0000000000082e14'],
    context: 'CoWCv7EjSWa6naU4fonnAcSSDDRjq9ddgdC13nuBdfR5x9xnR1sR',
    priority: 0,
    proof_of_work_nonce: 'bc2cc86f726c0000',
    liquidity_baking_escape_vote: false,
    signature:
      'sigPoYZryqKDksRqXpfby9eDfx6SbaLAq2vwLVnWJNrv73JrfAwAgiM1mCZrR7UaqEwvuR48QRJfj2FW6dCFAPynmJbgjysg',
  },
  metadata: {
    protocol: 'PtGRANADsDU8R9daYKAgWnQYAJ64omN1o3KMGVCykShA97vQbvV',
    next_protocol: 'PtGRANADsDU8R9daYKAgWnQYAJ64omN1o3KMGVCykShA97vQbvV',
    test_chain_status: { status: 'not_running' },
    max_operations_ttl: 120,
    max_operation_data_length: 32768,
    max_block_header_length: 239,
    max_operation_list_length: [
      { max_size: 4194304, max_op: 2048 },
      { max_size: 32768 },
      { max_size: 135168, max_op: 132 },
      { max_size: 524288 },
    ],
    baker: 'tz1RomaiWJV3NFDZWTMVR2aEeHknsn3iF5Gi',
    level_info: {
      level: 536085,
      level_position: 536084,
      cycle: 131,
      cycle_position: 3604,
      expected_commitment: false,
    },
    voting_period_info: {
      voting_period: { index: 26, kind: 'proposal', start_position: 532481 },
      position: 3603,
      remaining: 16876,
    },
    nonce_hash: null,
    consumed_gas: '108015000',
    deactivated: [],
    balance_updates: [
      {
        kind: 'contract',
        contract: 'tz1RomaiWJV3NFDZWTMVR2aEeHknsn3iF5Gi',
        change: '-640000000',
        origin: 'block',
      },
      {
        kind: 'freezer',
        category: 'deposits',
        delegate: 'tz1RomaiWJV3NFDZWTMVR2aEeHknsn3iF5Gi',
        cycle: 131,
        change: '640000000',
        origin: 'block',
      },
      {
        kind: 'freezer',
        category: 'rewards',
        delegate: 'tz1RomaiWJV3NFDZWTMVR2aEeHknsn3iF5Gi',
        cycle: 131,
        change: '16093750',
        origin: 'block',
      },
    ],
    liquidity_baking_escape_ema: 281925,
    implicit_operations_results: [
      {
        kind: 'transaction',
        storage: [
          { int: '81141010' },
          { int: '1004154556389' },
          { int: '87443' },
          { bytes: '01e927f00ef734dfc85919635e9afc9166c83ef9fc00' },
          { bytes: '0115eb0104481a6d7921160bc982c5e0a561cd8a3a00' },
        ],
        balance_updates: [
          {
            kind: 'contract',
            contract: 'KT1TxqZ8QtKvLu3V3JH7Gx58n7Co8pgtpQU5',
            change: '2500000',
            origin: 'subsidy',
          },
        ],
        consumed_gas: '2118',
        consumed_milligas: '2117300',
        storage_size: '4636',
      },
    ],
  },
  operations: [
    [
      {
        protocol: 'PtGRANADsDU8R9daYKAgWnQYAJ64omN1o3KMGVCykShA97vQbvV',
        chain_id: 'NetXz969SFaFn8k',
        hash: 'ooK6Fj6pPV8LMfuuo9CTTyDzd28CRiRzC1UFzwxrvuWCtfiuBHA',
        branch: 'BM44sPfEofA59iibf5v5AC1wB1BH2kYi9YsKXHmQeDqZFkMSDD7',
        contents: [
          {
            kind: 'endorsement_with_slot',
            endorsement: {
              branch: 'BM44sPfEofA59iibf5v5AC1wB1BH2kYi9YsKXHmQeDqZFkMSDD7',
              operations: { kind: 'endorsement', level: 536084 },
              signature:
                'sigQigTJyznbECHxo3sokWyvsMX3GdUWhfND76bhpdQgrmj8MLcVpTQTudg8T7dswKAm4wVq9dXx3sdGiwnz1tWwatJJ2JGP',
            },
            slot: 7,
            metadata: {
              balance_updates: [
                {
                  kind: 'contract',
                  contract: 'tz1NFs6yP2sXd5vAAbR43bbDRpV2nahDZope',
                  change: '-62500000',
                  origin: 'block',
                },
                {
                  kind: 'freezer',
                  category: 'deposits',
                  delegate: 'tz1NFs6yP2sXd5vAAbR43bbDRpV2nahDZope',
                  cycle: 131,
                  change: '62500000',
                  origin: 'block',
                },
                {
                  kind: 'freezer',
                  category: 'rewards',
                  delegate: 'tz1NFs6yP2sXd5vAAbR43bbDRpV2nahDZope',
                  cycle: 131,
                  change: '1953125',
                  origin: 'block',
                },
              ],
              delegate: 'tz1NFs6yP2sXd5vAAbR43bbDRpV2nahDZope',
              slots: [
                7, 26, 28, 31, 52, 55, 56, 57, 73, 81, 90, 100, 116, 137, 139, 141, 150, 155, 194,
                204, 209, 219, 226, 240, 255,
              ],
            },
          },
        ],
      },
      {
        protocol: 'PtGRANADsDU8R9daYKAgWnQYAJ64omN1o3KMGVCykShA97vQbvV',
        chain_id: 'NetXz969SFaFn8k',
        hash: 'opVPpVtkcwWYW3AaKCLYgLXDLVteewJxv1mqvRKJxiBVx4hR3Ld',
        branch: 'BM44sPfEofA59iibf5v5AC1wB1BH2kYi9YsKXHmQeDqZFkMSDD7',
        contents: [
          {
            kind: 'endorsement_with_slot',
            endorsement: {
              branch: 'BM44sPfEofA59iibf5v5AC1wB1BH2kYi9YsKXHmQeDqZFkMSDD7',
              operations: { kind: 'endorsement', level: 536084 },
              signature:
                'sigucwWZSCHugH3w3g8Mm9k8C2vLQfCU2CixgRTLSQF2xDg5Xf6VqEDB2snUJQjZHFD4EFejrAuQhcGFJ2j729ABYAxgQdZV',
            },
            slot: 25,
            metadata: {
              balance_updates: [
                {
                  kind: 'contract',
                  contract: 'tz1TGKSrZrBpND3PELJ43nVdyadoeiM1WMzb',
                  change: '-12500000',
                  origin: 'block',
                },
                {
                  kind: 'freezer',
                  category: 'deposits',
                  delegate: 'tz1TGKSrZrBpND3PELJ43nVdyadoeiM1WMzb',
                  cycle: 131,
                  change: '12500000',
                  origin: 'block',
                },
                {
                  kind: 'freezer',
                  category: 'rewards',
                  delegate: 'tz1TGKSrZrBpND3PELJ43nVdyadoeiM1WMzb',
                  cycle: 131,
                  change: '390625',
                  origin: 'block',
                },
              ],
              delegate: 'tz1TGKSrZrBpND3PELJ43nVdyadoeiM1WMzb',
              slots: [25, 49, 59, 143, 241],
            },
          },
        ],
      },
      {
        protocol: 'PtGRANADsDU8R9daYKAgWnQYAJ64omN1o3KMGVCykShA97vQbvV',
        chain_id: 'NetXz969SFaFn8k',
        hash: 'ooV7jeBXUjeAXb7sB6UbiPrFeadyUWAQjyVbiezYV4dQ2jh7nXZ',
        branch: 'BM44sPfEofA59iibf5v5AC1wB1BH2kYi9YsKXHmQeDqZFkMSDD7',
        contents: [
          {
            kind: 'endorsement_with_slot',
            endorsement: {
              branch: 'BM44sPfEofA59iibf5v5AC1wB1BH2kYi9YsKXHmQeDqZFkMSDD7',
              operations: { kind: 'endorsement', level: 536084 },
              signature:
                'sigjgqeWJXQGxt7nuUJy9ZfJQrUyoMVgi34YKsCmvuKczKc198x6izoCgMGRVb7iTqDgqzEKcPFeLJpW6jxzFJ5AGXgCDPAK',
            },
            slot: 1,
            metadata: {
              balance_updates: [
                {
                  kind: 'contract',
                  contract: 'tz3WXYtyDUNL91qfiCJtVUX746QpNv5i5ve5',
                  change: '-37500000',
                  origin: 'block',
                },
                {
                  kind: 'freezer',
                  category: 'deposits',
                  delegate: 'tz3WXYtyDUNL91qfiCJtVUX746QpNv5i5ve5',
                  cycle: 131,
                  change: '37500000',
                  origin: 'block',
                },
                {
                  kind: 'freezer',
                  category: 'rewards',
                  delegate: 'tz3WXYtyDUNL91qfiCJtVUX746QpNv5i5ve5',
                  cycle: 131,
                  change: '1171875',
                  origin: 'block',
                },
              ],
              delegate: 'tz3WXYtyDUNL91qfiCJtVUX746QpNv5i5ve5',
              slots: [1, 12, 19, 20, 32, 46, 66, 93, 129, 146, 174, 176, 185, 187, 236],
            },
          },
        ],
      },
      {
        protocol: 'PtGRANADsDU8R9daYKAgWnQYAJ64omN1o3KMGVCykShA97vQbvV',
        chain_id: 'NetXz969SFaFn8k',
        hash: 'ooAcSPWvGdxWHs9axWkkUv8auevgo5S65y6BGuqKUyzxmQtAkkw',
        branch: 'BM44sPfEofA59iibf5v5AC1wB1BH2kYi9YsKXHmQeDqZFkMSDD7',
        contents: [
          {
            kind: 'endorsement_with_slot',
            endorsement: {
              branch: 'BM44sPfEofA59iibf5v5AC1wB1BH2kYi9YsKXHmQeDqZFkMSDD7',
              operations: { kind: 'endorsement', level: 536084 },
              signature:
                'sigshnJHvMozfhProNP2iBV1baiUoUGoZC9yc7XyKk3TKBHZ6pJyLb8vWUcGpvqPPv732HzB5px7QsBm9KVm2n9TgERgCDmB',
            },
            slot: 62,
            metadata: {
              balance_updates: [
                {
                  kind: 'contract',
                  contract: 'tz1Qr3aFcxjRGu84PfDEtqQSM2PQutSn635P',
                  change: '-5000000',
                  origin: 'block',
                },
                {
                  kind: 'freezer',
                  category: 'deposits',
                  delegate: 'tz1Qr3aFcxjRGu84PfDEtqQSM2PQutSn635P',
                  cycle: 131,
                  change: '5000000',
                  origin: 'block',
                },
                {
                  kind: 'freezer',
                  category: 'rewards',
                  delegate: 'tz1Qr3aFcxjRGu84PfDEtqQSM2PQutSn635P',
                  cycle: 131,
                  change: '156250',
                  origin: 'block',
                },
              ],
              delegate: 'tz1Qr3aFcxjRGu84PfDEtqQSM2PQutSn635P',
              slots: [62, 102],
            },
          },
        ],
      },
      {
        protocol: 'PtGRANADsDU8R9daYKAgWnQYAJ64omN1o3KMGVCykShA97vQbvV',
        chain_id: 'NetXz969SFaFn8k',
        hash: 'onrL2x7aon3qi1p3wsroWnRfx8KigzYNQg5S2EYyB3k7N72Nqcy',
        branch: 'BM44sPfEofA59iibf5v5AC1wB1BH2kYi9YsKXHmQeDqZFkMSDD7',
        contents: [
          {
            kind: 'endorsement_with_slot',
            endorsement: {
              branch: 'BM44sPfEofA59iibf5v5AC1wB1BH2kYi9YsKXHmQeDqZFkMSDD7',
              operations: { kind: 'endorsement', level: 536084 },
              signature:
                'sigWwT3mRjCzfvxy65Nd76yHDH6MBwDw1RhhMf4miDp6MvtBjCvcgXhL7z4WM1vZrGEB74UiAbnJzNCSJ3KDwNFwBbU2kpU4',
            },
            slot: 3,
            metadata: {
              balance_updates: [
                {
                  kind: 'contract',
                  contract: 'tz1cjyja1TU6fiyiFav3mFAdnDsCReJ12hPD',
                  change: '-62500000',
                  origin: 'block',
                },
                {
                  kind: 'freezer',
                  category: 'deposits',
                  delegate: 'tz1cjyja1TU6fiyiFav3mFAdnDsCReJ12hPD',
                  cycle: 131,
                  change: '62500000',
                  origin: 'block',
                },
                {
                  kind: 'freezer',
                  category: 'rewards',
                  delegate: 'tz1cjyja1TU6fiyiFav3mFAdnDsCReJ12hPD',
                  cycle: 131,
                  change: '1953125',
                  origin: 'block',
                },
              ],
              delegate: 'tz1cjyja1TU6fiyiFav3mFAdnDsCReJ12hPD',
              slots: [
                3, 6, 13, 21, 37, 63, 68, 86, 94, 110, 123, 133, 134, 152, 169, 170, 208, 212, 213,
                215, 218, 221, 223, 232, 254,
              ],
            },
          },
        ],
      },
      {
        protocol: 'PtGRANADsDU8R9daYKAgWnQYAJ64omN1o3KMGVCykShA97vQbvV',
        chain_id: 'NetXz969SFaFn8k',
        hash: 'onseUqV43jrnEQDWV6S7pNEWAQ1W1jVwDrtjXLXUMMYqLJUaCKo',
        branch: 'BM44sPfEofA59iibf5v5AC1wB1BH2kYi9YsKXHmQeDqZFkMSDD7',
        contents: [
          {
            kind: 'endorsement_with_slot',
            endorsement: {
              branch: 'BM44sPfEofA59iibf5v5AC1wB1BH2kYi9YsKXHmQeDqZFkMSDD7',
              operations: { kind: 'endorsement', level: 536084 },
              signature:
                'sigeeqviP7cPW2SdBNx53trnr9zCDTJKZd2ixZGTg5qz17CcEJaHZgQZjcEcFcy2EnEDusA4m9yeT9JK24fipu9XyiprZ6pH',
            },
            slot: 184,
            metadata: {
              balance_updates: [
                {
                  kind: 'contract',
                  contract: 'tz1LKV2Hb8XezQXFqCmsKXYDc8BWQkvFnzcP',
                  change: '-2500000',
                  origin: 'block',
                },
                {
                  kind: 'freezer',
                  category: 'deposits',
                  delegate: 'tz1LKV2Hb8XezQXFqCmsKXYDc8BWQkvFnzcP',
                  cycle: 131,
                  change: '2500000',
                  origin: 'block',
                },
                {
                  kind: 'freezer',
                  category: 'rewards',
                  delegate: 'tz1LKV2Hb8XezQXFqCmsKXYDc8BWQkvFnzcP',
                  cycle: 131,
                  change: '78125',
                  origin: 'block',
                },
              ],
              delegate: 'tz1LKV2Hb8XezQXFqCmsKXYDc8BWQkvFnzcP',
              slots: [184],
            },
          },
        ],
      },
      {
        protocol: 'PtGRANADsDU8R9daYKAgWnQYAJ64omN1o3KMGVCykShA97vQbvV',
        chain_id: 'NetXz969SFaFn8k',
        hash: 'ooFD5AWihGns7RaZHKqyiJPFDAYuCpXJGT72p6CCig4EQsYm9tT',
        branch: 'BM44sPfEofA59iibf5v5AC1wB1BH2kYi9YsKXHmQeDqZFkMSDD7',
        contents: [
          {
            kind: 'endorsement_with_slot',
            endorsement: {
              branch: 'BM44sPfEofA59iibf5v5AC1wB1BH2kYi9YsKXHmQeDqZFkMSDD7',
              operations: { kind: 'endorsement', level: 536084 },
              signature:
                'sigiDTLARKGSKx1KnhxMdhxV7h4NnChw3gzYy8fJv9C58vPD9mCuKsvCrRGUk79mCqaxudyUu5T3qxWkuJqugJysSeg45KBT',
            },
            slot: 5,
            metadata: {
              balance_updates: [
                {
                  kind: 'contract',
                  contract: 'tz1RomaiWJV3NFDZWTMVR2aEeHknsn3iF5Gi',
                  change: '-80000000',
                  origin: 'block',
                },
                {
                  kind: 'freezer',
                  category: 'deposits',
                  delegate: 'tz1RomaiWJV3NFDZWTMVR2aEeHknsn3iF5Gi',
                  cycle: 131,
                  change: '80000000',
                  origin: 'block',
                },
                {
                  kind: 'freezer',
                  category: 'rewards',
                  delegate: 'tz1RomaiWJV3NFDZWTMVR2aEeHknsn3iF5Gi',
                  cycle: 131,
                  change: '2500000',
                  origin: 'block',
                },
              ],
              delegate: 'tz1RomaiWJV3NFDZWTMVR2aEeHknsn3iF5Gi',
              slots: [
                5, 18, 22, 24, 51, 77, 79, 95, 98, 115, 140, 145, 151, 157, 162, 163, 167, 171, 181,
                188, 189, 195, 196, 198, 202, 205, 207, 227, 231, 238, 242, 252,
              ],
            },
          },
        ],
      },
      {
        protocol: 'PtGRANADsDU8R9daYKAgWnQYAJ64omN1o3KMGVCykShA97vQbvV',
        chain_id: 'NetXz969SFaFn8k',
        hash: 'ooqKhCA49xFX9wwyU3LmgwJZu8qwfgRQNHHjaoA45QkmAR8rxmW',
        branch: 'BM44sPfEofA59iibf5v5AC1wB1BH2kYi9YsKXHmQeDqZFkMSDD7',
        contents: [
          {
            kind: 'endorsement_with_slot',
            endorsement: {
              branch: 'BM44sPfEofA59iibf5v5AC1wB1BH2kYi9YsKXHmQeDqZFkMSDD7',
              operations: { kind: 'endorsement', level: 536084 },
              signature:
                'sigkD1y57jWwdGyzwgHXZoEFsNuJCcWsC4SRpMeMiAzFbgf5G3ATQoZF2pCtCdfxvXYu1nDixosqJvqttiX7hNNWWw7H5H3o',
            },
            slot: 16,
            metadata: {
              balance_updates: [
                {
                  kind: 'contract',
                  contract: 'tz1aWXP237BLwNHJcCD4b3DutCevhqq2T1Z9',
                  change: '-45000000',
                  origin: 'block',
                },
                {
                  kind: 'freezer',
                  category: 'deposits',
                  delegate: 'tz1aWXP237BLwNHJcCD4b3DutCevhqq2T1Z9',
                  cycle: 131,
                  change: '45000000',
                  origin: 'block',
                },
                {
                  kind: 'freezer',
                  category: 'rewards',
                  delegate: 'tz1aWXP237BLwNHJcCD4b3DutCevhqq2T1Z9',
                  cycle: 131,
                  change: '1406250',
                  origin: 'block',
                },
              ],
              delegate: 'tz1aWXP237BLwNHJcCD4b3DutCevhqq2T1Z9',
              slots: [
                16, 35, 42, 53, 76, 80, 85, 87, 91, 125, 126, 127, 179, 186, 214, 225, 239, 245,
              ],
            },
          },
        ],
      },
      {
        protocol: 'PtGRANADsDU8R9daYKAgWnQYAJ64omN1o3KMGVCykShA97vQbvV',
        chain_id: 'NetXz969SFaFn8k',
        hash: 'ooiBEZGpe15vBVEJBD7f42NhtXUVyMgZFJ6Kq6Rz9x59acRjfqC',
        branch: 'BM44sPfEofA59iibf5v5AC1wB1BH2kYi9YsKXHmQeDqZFkMSDD7',
        contents: [
          {
            kind: 'endorsement_with_slot',
            endorsement: {
              branch: 'BM44sPfEofA59iibf5v5AC1wB1BH2kYi9YsKXHmQeDqZFkMSDD7',
              operations: { kind: 'endorsement', level: 536084 },
              signature:
                'sigo63PyYEcmFmGoWiLoY7aChpqq4AzE3u6EyeMbX5dfmSyFPqrbKJgTrH4Pg9ELZJfFWW9DmurYw77nqmH529wLYxVq43ec',
            },
            slot: 201,
            metadata: {
              balance_updates: [
                {
                  kind: 'contract',
                  contract: 'tz1PUv7oRg5xpMf4nFewZrtRtnmCizW2ETtU',
                  change: '-2500000',
                  origin: 'block',
                },
                {
                  kind: 'freezer',
                  category: 'deposits',
                  delegate: 'tz1PUv7oRg5xpMf4nFewZrtRtnmCizW2ETtU',
                  cycle: 131,
                  change: '2500000',
                  origin: 'block',
                },
                {
                  kind: 'freezer',
                  category: 'rewards',
                  delegate: 'tz1PUv7oRg5xpMf4nFewZrtRtnmCizW2ETtU',
                  cycle: 131,
                  change: '78125',
                  origin: 'block',
                },
              ],
              delegate: 'tz1PUv7oRg5xpMf4nFewZrtRtnmCizW2ETtU',
              slots: [201],
            },
          },
        ],
      },
      {
        protocol: 'PtGRANADsDU8R9daYKAgWnQYAJ64omN1o3KMGVCykShA97vQbvV',
        chain_id: 'NetXz969SFaFn8k',
        hash: 'oogyZfDdZPWFxuyRAQs1J53CxmxUbnd6Q1WixifHKpnicphrEbb',
        branch: 'BM44sPfEofA59iibf5v5AC1wB1BH2kYi9YsKXHmQeDqZFkMSDD7',
        contents: [
          {
            kind: 'endorsement_with_slot',
            endorsement: {
              branch: 'BM44sPfEofA59iibf5v5AC1wB1BH2kYi9YsKXHmQeDqZFkMSDD7',
              operations: { kind: 'endorsement', level: 536084 },
              signature:
                'sigpznVMjV53auoAPqxYxkYANxbrYaMmuq242ueQqo1NijaQvZRUEZP5sFwMLVpLGRUzHEkrYkX6NGFm1RfKKb4yBmBjrHr5',
            },
            slot: 15,
            metadata: {
              balance_updates: [
                {
                  kind: 'contract',
                  contract: 'tz1T8UYSbVuRm6CdhjvwCfXsKXb4yL9ai9Q3',
                  change: '-75000000',
                  origin: 'block',
                },
                {
                  kind: 'freezer',
                  category: 'deposits',
                  delegate: 'tz1T8UYSbVuRm6CdhjvwCfXsKXb4yL9ai9Q3',
                  cycle: 131,
                  change: '75000000',
                  origin: 'block',
                },
                {
                  kind: 'freezer',
                  category: 'rewards',
                  delegate: 'tz1T8UYSbVuRm6CdhjvwCfXsKXb4yL9ai9Q3',
                  cycle: 131,
                  change: '2343750',
                  origin: 'block',
                },
              ],
              delegate: 'tz1T8UYSbVuRm6CdhjvwCfXsKXb4yL9ai9Q3',
              slots: [
                15, 23, 30, 34, 38, 45, 60, 61, 64, 67, 70, 75, 78, 89, 92, 104, 112, 114, 122, 124,
                138, 149, 160, 175, 191, 197, 199, 230, 233, 234,
              ],
            },
          },
        ],
      },
      {
        protocol: 'PtGRANADsDU8R9daYKAgWnQYAJ64omN1o3KMGVCykShA97vQbvV',
        chain_id: 'NetXz969SFaFn8k',
        hash: 'oozpKKz7XcaihZhSsEMiLcUPvGxjZe74yz1hrNzvYg9W1NNCjTx',
        branch: 'BM44sPfEofA59iibf5v5AC1wB1BH2kYi9YsKXHmQeDqZFkMSDD7',
        contents: [
          {
            kind: 'endorsement_with_slot',
            endorsement: {
              branch: 'BM44sPfEofA59iibf5v5AC1wB1BH2kYi9YsKXHmQeDqZFkMSDD7',
              operations: { kind: 'endorsement', level: 536084 },
              signature:
                'sigqhueAmzzAArEiHLnwQUpLEVcz8wWcn2qxfMKmRrGRg2cn6k4q17eBaU9bHDepsf1jnGN3cDHrTfbas58BW7pbUoCJgHUh',
            },
            slot: 120,
            metadata: {
              balance_updates: [
                {
                  kind: 'contract',
                  contract: 'tz1VpvtSaSxKvykrqajFJTZqCXgoVJ5cKaM1',
                  change: '-5000000',
                  origin: 'block',
                },
                {
                  kind: 'freezer',
                  category: 'deposits',
                  delegate: 'tz1VpvtSaSxKvykrqajFJTZqCXgoVJ5cKaM1',
                  cycle: 131,
                  change: '5000000',
                  origin: 'block',
                },
                {
                  kind: 'freezer',
                  category: 'rewards',
                  delegate: 'tz1VpvtSaSxKvykrqajFJTZqCXgoVJ5cKaM1',
                  cycle: 131,
                  change: '156250',
                  origin: 'block',
                },
              ],
              delegate: 'tz1VpvtSaSxKvykrqajFJTZqCXgoVJ5cKaM1',
              slots: [120, 131],
            },
          },
        ],
      },
      {
        protocol: 'PtGRANADsDU8R9daYKAgWnQYAJ64omN1o3KMGVCykShA97vQbvV',
        chain_id: 'NetXz969SFaFn8k',
        hash: 'onwE9jGH8LXetQmPTHekChAnecpcmV92md8WMSgTcjok6DUDtJ9',
        branch: 'BM44sPfEofA59iibf5v5AC1wB1BH2kYi9YsKXHmQeDqZFkMSDD7',
        contents: [
          {
            kind: 'endorsement_with_slot',
            endorsement: {
              branch: 'BM44sPfEofA59iibf5v5AC1wB1BH2kYi9YsKXHmQeDqZFkMSDD7',
              operations: { kind: 'endorsement', level: 536084 },
              signature:
                'sigfTpvZPXMb2ur3PhQ2w6N93auNHft7swUHdf4QsizPMgbKHxNFV4TU8MmHXQ5ZivMkeCAbwBEdDApAw25uf9vzzPuAFoAK',
            },
            slot: 8,
            metadata: {
              balance_updates: [
                {
                  kind: 'contract',
                  contract: 'tz1VWasoyFGAWZt5K2qZRzP3cWzv3z7MMhP8',
                  change: '-65000000',
                  origin: 'block',
                },
                {
                  kind: 'freezer',
                  category: 'deposits',
                  delegate: 'tz1VWasoyFGAWZt5K2qZRzP3cWzv3z7MMhP8',
                  cycle: 131,
                  change: '65000000',
                  origin: 'block',
                },
                {
                  kind: 'freezer',
                  category: 'rewards',
                  delegate: 'tz1VWasoyFGAWZt5K2qZRzP3cWzv3z7MMhP8',
                  cycle: 131,
                  change: '2031250',
                  origin: 'block',
                },
              ],
              delegate: 'tz1VWasoyFGAWZt5K2qZRzP3cWzv3z7MMhP8',
              slots: [
                8, 10, 11, 33, 41, 58, 99, 107, 108, 111, 118, 128, 147, 148, 154, 156, 158, 168,
                172, 183, 192, 228, 237, 244, 250, 253,
              ],
            },
          },
        ],
      },
      {
        protocol: 'PtGRANADsDU8R9daYKAgWnQYAJ64omN1o3KMGVCykShA97vQbvV',
        chain_id: 'NetXz969SFaFn8k',
        hash: 'oo7qUvuxaxUthTzfbTYk56TPBQ1V59iycoTmbTpPYGPENyuR7Fi',
        branch: 'BM44sPfEofA59iibf5v5AC1wB1BH2kYi9YsKXHmQeDqZFkMSDD7',
        contents: [
          {
            kind: 'endorsement_with_slot',
            endorsement: {
              branch: 'BM44sPfEofA59iibf5v5AC1wB1BH2kYi9YsKXHmQeDqZFkMSDD7',
              operations: { kind: 'endorsement', level: 536084 },
              signature:
                'sigeiWyjufSMaWBEHqotERDGUSFtTLimnFhTH4gm1Pi8qB7hrz41czWXquqHGcVAdt8a3Z96o6Ktg5SkMJ9cyr6qFq8ccmTM',
            },
            slot: 9,
            metadata: {
              balance_updates: [
                {
                  kind: 'contract',
                  contract: 'tz1SwJwrKe8H1yi6KnYKCYkVHPApJRnZcHsa',
                  change: '-60000000',
                  origin: 'block',
                },
                {
                  kind: 'freezer',
                  category: 'deposits',
                  delegate: 'tz1SwJwrKe8H1yi6KnYKCYkVHPApJRnZcHsa',
                  cycle: 131,
                  change: '60000000',
                  origin: 'block',
                },
                {
                  kind: 'freezer',
                  category: 'rewards',
                  delegate: 'tz1SwJwrKe8H1yi6KnYKCYkVHPApJRnZcHsa',
                  cycle: 131,
                  change: '1875000',
                  origin: 'block',
                },
              ],
              delegate: 'tz1SwJwrKe8H1yi6KnYKCYkVHPApJRnZcHsa',
              slots: [
                9, 14, 27, 43, 54, 83, 84, 96, 101, 105, 113, 136, 144, 153, 159, 164, 180, 182,
                203, 211, 224, 247, 249, 251,
              ],
            },
          },
        ],
      },
    ],
    [],
    [],
    [
      {
        protocol: 'PtGRANADsDU8R9daYKAgWnQYAJ64omN1o3KMGVCykShA97vQbvV',
        chain_id: 'NetXz969SFaFn8k',
        hash: 'ooybqGUDKq3QUbZVe4qZ1oLx2GhTqZ6VdVTuA7SZDfE5B2jbHRd',
        branch: 'BLEzWSy1Aze5Enuv3KimDvqZbAXbzSHxQeRDztN6tvXknfTCAus',
        contents: [
          {
            kind: 'transaction',
            source: 'tz1cpnaaG6FkPAUcrsj45zhYYSPMvJnxyc59',
            fee: '0',
            counter: '703827',
            gas_limit: '3422',
            storage_limit: '67',
            amount: '0',
            destination: 'KT1RxHZJCrFVuPQJWqhVLBZeZxm7SawHdHGL',
            parameters: {
              entrypoint: 'update_operators',
              value: [
                {
                  prim: 'Left',
                  args: [
                    {
                      prim: 'Pair',
                      args: [
                        { string: 'tz1cpnaaG6FkPAUcrsj45zhYYSPMvJnxyc59' },
                        {
                          prim: 'Pair',
                          args: [{ string: 'KT1PrWB2PSwWNzbfpA9SJbUaHXxCzbLSJspm' }, { int: '1' }],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            metadata: {
              balance_updates: [],
              operation_result: {
                status: 'applied',
                storage: {
                  prim: 'Pair',
                  args: [
                    { prim: 'Pair', args: [{ int: '20440' }, { int: '20441' }] },
                    { prim: 'Pair', args: [{ int: '20442' }, { int: '20443' }] },
                  ],
                },
                big_map_diff: [
                  {
                    action: 'update',
                    big_map: '20442',
                    key_hash: 'exprtpmtn8bL4jrTW2AfMZJ9p2yx1k9xMkN5f7EWhxtUVPtvutxqNL',
                    key: {
                      prim: 'Pair',
                      args: [
                        { bytes: '0000bc82eedf570c81349226f937bed3d3485a2b080f' },
                        {
                          prim: 'Pair',
                          args: [
                            { bytes: '01a783b18821ce1f502c8a1c2fd9761ad21c1391d600' },
                            { int: '1' },
                          ],
                        },
                      ],
                    },
                    value: { prim: 'Unit' },
                  },
                ],
                balance_updates: [
                  {
                    kind: 'contract',
                    contract: 'tz1cpnaaG6FkPAUcrsj45zhYYSPMvJnxyc59',
                    change: '-16750',
                    origin: 'block',
                  },
                ],
                consumed_gas: '3322',
                consumed_milligas: '3321239',
                storage_size: '48520',
                paid_storage_size_diff: '67',
                lazy_storage_diff: [
                  { kind: 'big_map', id: '20443', diff: { action: 'update', updates: [] } },
                  {
                    kind: 'big_map',
                    id: '20442',
                    diff: {
                      action: 'update',
                      updates: [
                        {
                          key_hash: 'exprtpmtn8bL4jrTW2AfMZJ9p2yx1k9xMkN5f7EWhxtUVPtvutxqNL',
                          key: {
                            prim: 'Pair',
                            args: [
                              { bytes: '0000bc82eedf570c81349226f937bed3d3485a2b080f' },
                              {
                                prim: 'Pair',
                                args: [
                                  { bytes: '01a783b18821ce1f502c8a1c2fd9761ad21c1391d600' },
                                  { int: '1' },
                                ],
                              },
                            ],
                          },
                          value: { prim: 'Unit' },
                        },
                      ],
                    },
                  },
                  { kind: 'big_map', id: '20441', diff: { action: 'update', updates: [] } },
                  { kind: 'big_map', id: '20440', diff: { action: 'update', updates: [] } },
                ],
              },
            },
          },
          {
            kind: 'transaction',
            source: 'tz1cpnaaG6FkPAUcrsj45zhYYSPMvJnxyc59',
            fee: '0',
            counter: '703828',
            gas_limit: '101201',
            storage_limit: '70',
            amount: '0',
            destination: 'KT1PrWB2PSwWNzbfpA9SJbUaHXxCzbLSJspm',
            parameters: {
              entrypoint: 'swap_exact_for_tokens',
              value: {
                prim: 'Pair',
                args: [
                  {
                    prim: 'Pair',
                    args: [
                      {
                        prim: 'Pair',
                        args: [
                          { string: 'tz1cpnaaG6FkPAUcrsj45zhYYSPMvJnxyc59' },
                          { int: '5000000000' },
                        ],
                      },
                      {
                        prim: 'Pair',
                        args: [{ int: '14146908' }, { string: '2022-01-28T11:57:44.601Z' }],
                      },
                    ],
                  },
                  {
                    prim: 'Pair',
                    args: [
                      {
                        prim: 'Pair',
                        args: [
                          { string: 'KT1RxHZJCrFVuPQJWqhVLBZeZxm7SawHdHGL' },
                          { prim: 'Some', args: [{ int: '1' }] },
                        ],
                      },
                      {
                        prim: 'Pair',
                        args: [
                          { string: 'KT1RxHZJCrFVuPQJWqhVLBZeZxm7SawHdHGL' },
                          { prim: 'Some', args: [{ int: '0' }] },
                        ],
                      },
                    ],
                  },
                ],
              },
            },
            metadata: {
              balance_updates: [],
              operation_result: {
                status: 'applied',
                storage: {
                  prim: 'Pair',
                  args: [
                    {
                      prim: 'Pair',
                      args: [
                        {
                          prim: 'Some',
                          args: [
                            {
                              prim: 'Pair',
                              args: [
                                {
                                  prim: 'Pair',
                                  args: [
                                    {
                                      prim: 'Pair',
                                      args: [
                                        { bytes: '0000bc82eedf570c81349226f937bed3d3485a2b080f' },
                                        { prim: 'None' },
                                      ],
                                    },
                                    {
                                      prim: 'Pair',
                                      args: [
                                        { prim: 'None' },
                                        { prim: 'Right', args: [{ prim: 'Unit' }] },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  prim: 'Pair',
                                  args: [
                                    {
                                      prim: 'Pair',
                                      args: [
                                        {
                                          prim: 'Pair',
                                          args: [
                                            {
                                              bytes: '01be8be8d6aa8aa77b26fcdfb58b2d3abc097ba74600',
                                            },
                                            { prim: 'Some', args: [{ int: '1' }] },
                                          ],
                                        },
                                        {
                                          prim: 'Pair',
                                          args: [
                                            {
                                              bytes: '01be8be8d6aa8aa77b26fcdfb58b2d3abc097ba74600',
                                            },
                                            { prim: 'Some', args: [{ int: '0' }] },
                                          ],
                                        },
                                      ],
                                    },
                                    { prim: 'None' },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        { bytes: '012582f9db72407f07e78f065db7965ff42c46248700' },
                      ],
                    },
                    { prim: 'Pair', args: [{ int: '20669' }, { int: '20670' }] },
                  ],
                },
                big_map_diff: [],
                consumed_gas: '12665',
                consumed_milligas: '12664013',
                storage_size: '32990',
                lazy_storage_diff: [
                  { kind: 'big_map', id: '20670', diff: { action: 'update', updates: [] } },
                  { kind: 'big_map', id: '20669', diff: { action: 'update', updates: [] } },
                ],
              },
              internal_operation_results: [
                {
                  kind: 'transaction',
                  source: 'KT1PrWB2PSwWNzbfpA9SJbUaHXxCzbLSJspm',
                  nonce: 0,
                  amount: '0',
                  destination: 'KT1K2U9q55iPwGJEFyEqfbL3AKhHX4f6UThT',
                  parameters: {
                    entrypoint: 'get_reserves',
                    value: {
                      bytes:
                        '01a783b18821ce1f502c8a1c2fd9761ad21c1391d60072657365727665735f63616c6c6261636b',
                    },
                  },
                  result: {
                    status: 'applied',
                    storage: {
                      prim: 'Pair',
                      args: [
                        [
                          {
                            prim: 'Pair',
                            args: [
                              {
                                prim: 'Pair',
                                args: [
                                  {
                                    prim: 'Pair',
                                    args: [
                                      { prim: 'Pair', args: [{ int: '20832' }, { int: '20833' }] },
                                      { prim: 'Pair', args: [{ int: '20834' }, { int: '20835' }] },
                                    ],
                                  },
                                  { int: '20836' },
                                ],
                              },
                              { prim: 'Pair', args: [{ prim: 'None' }, { int: '20837' }] },
                            ],
                          },
                          { prim: 'Pair', args: [{ int: '2369921' }, { int: '976068754' }] },
                          { int: '1633368712' },
                          { int: '3520039054386878' },
                        ],
                        {
                          prim: 'Pair',
                          args: [
                            [
                              {
                                prim: 'Pair',
                                args: [
                                  { int: '9999515636866' },
                                  { int: '35198685566720594775323444348' },
                                ],
                              },
                              {
                                prim: 'Pair',
                                args: [
                                  { bytes: '01be8be8d6aa8aa77b26fcdfb58b2d3abc097ba74600' },
                                  { prim: 'Some', args: [{ int: '1' }] },
                                ],
                              },
                              { bytes: '01be8be8d6aa8aa77b26fcdfb58b2d3abc097ba74600' },
                              { prim: 'Some', args: [{ int: '0' }] },
                            ],
                            { bytes: '012582f9db72407f07e78f065db7965ff42c46248700' },
                          ],
                        },
                      ],
                    },
                    big_map_diff: [],
                    consumed_gas: '9288',
                    consumed_milligas: '9287559',
                    storage_size: '19227',
                    lazy_storage_diff: [
                      { kind: 'big_map', id: '20837', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20836', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20835', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20834', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20833', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20832', diff: { action: 'update', updates: [] } },
                    ],
                  },
                },
                {
                  kind: 'transaction',
                  source: 'KT1K2U9q55iPwGJEFyEqfbL3AKhHX4f6UThT',
                  nonce: 2,
                  amount: '0',
                  destination: 'KT1PrWB2PSwWNzbfpA9SJbUaHXxCzbLSJspm',
                  parameters: {
                    entrypoint: 'reserves_callback',
                    value: {
                      prim: 'Pair',
                      args: [
                        {
                          prim: 'Pair',
                          args: [{ int: '3520039054386878' }, { int: '9999515636866' }],
                        },
                        { int: '188166353164099' },
                      ],
                    },
                  },
                  result: {
                    status: 'applied',
                    storage: {
                      prim: 'Pair',
                      args: [
                        {
                          prim: 'Pair',
                          args: [
                            {
                              prim: 'Some',
                              args: [
                                {
                                  prim: 'Pair',
                                  args: [
                                    {
                                      prim: 'Pair',
                                      args: [
                                        {
                                          prim: 'Pair',
                                          args: [
                                            {
                                              bytes: '0000bc82eedf570c81349226f937bed3d3485a2b080f',
                                            },
                                            { prim: 'Some', args: [{ int: '3520039054386878' }] },
                                          ],
                                        },
                                        {
                                          prim: 'Pair',
                                          args: [
                                            { prim: 'Some', args: [{ int: '9999515636866' }] },
                                            { prim: 'Left', args: [{ prim: 'Unit' }] },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      prim: 'Pair',
                                      args: [
                                        {
                                          prim: 'Pair',
                                          args: [
                                            {
                                              prim: 'Pair',
                                              args: [
                                                {
                                                  bytes:
                                                    '01be8be8d6aa8aa77b26fcdfb58b2d3abc097ba74600',
                                                },
                                                { prim: 'Some', args: [{ int: '1' }] },
                                              ],
                                            },
                                            {
                                              prim: 'Pair',
                                              args: [
                                                {
                                                  bytes:
                                                    '01be8be8d6aa8aa77b26fcdfb58b2d3abc097ba74600',
                                                },
                                                { prim: 'Some', args: [{ int: '0' }] },
                                              ],
                                            },
                                          ],
                                        },
                                        { prim: 'Some', args: [{ int: '188166353164099' }] },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                            { bytes: '012582f9db72407f07e78f065db7965ff42c46248700' },
                          ],
                        },
                        { prim: 'Pair', args: [{ int: '20669' }, { int: '20670' }] },
                      ],
                    },
                    big_map_diff: [],
                    consumed_gas: '9479',
                    consumed_milligas: '9478157',
                    storage_size: '33015',
                    lazy_storage_diff: [
                      { kind: 'big_map', id: '20670', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20669', diff: { action: 'update', updates: [] } },
                    ],
                  },
                },
                {
                  kind: 'transaction',
                  source: 'KT1PrWB2PSwWNzbfpA9SJbUaHXxCzbLSJspm',
                  nonce: 1,
                  amount: '0',
                  destination: 'KT1PrWB2PSwWNzbfpA9SJbUaHXxCzbLSJspm',
                  parameters: {
                    entrypoint: 'main_entry',
                    value: {
                      prim: 'Left',
                      args: [
                        {
                          prim: 'Left',
                          args: [
                            {
                              prim: 'Left',
                              args: [
                                {
                                  prim: 'Right',
                                  args: [
                                    [
                                      {
                                        prim: 'Pair',
                                        args: [
                                          {
                                            prim: 'Pair',
                                            args: [
                                              {
                                                bytes:
                                                  '0000bc82eedf570c81349226f937bed3d3485a2b080f',
                                              },
                                              { int: '5000000000' },
                                            ],
                                          },
                                          {
                                            prim: 'Pair',
                                            args: [{ int: '14146908' }, { int: '1643371064' }],
                                          },
                                        ],
                                      },
                                      {
                                        prim: 'Pair',
                                        args: [
                                          { bytes: '01be8be8d6aa8aa77b26fcdfb58b2d3abc097ba74600' },
                                          { prim: 'Some', args: [{ int: '1' }] },
                                        ],
                                      },
                                      { bytes: '01be8be8d6aa8aa77b26fcdfb58b2d3abc097ba74600' },
                                      { prim: 'Some', args: [{ int: '0' }] },
                                    ],
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  },
                  result: {
                    status: 'applied',
                    storage: {
                      prim: 'Pair',
                      args: [
                        {
                          prim: 'Pair',
                          args: [
                            { prim: 'None' },
                            { bytes: '012582f9db72407f07e78f065db7965ff42c46248700' },
                          ],
                        },
                        { prim: 'Pair', args: [{ int: '20669' }, { int: '20670' }] },
                      ],
                    },
                    big_map_diff: [],
                    consumed_gas: '11667',
                    consumed_milligas: '11666798',
                    storage_size: '32875',
                    lazy_storage_diff: [
                      { kind: 'big_map', id: '20670', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20669', diff: { action: 'update', updates: [] } },
                    ],
                  },
                },
                {
                  kind: 'transaction',
                  source: 'KT1PrWB2PSwWNzbfpA9SJbUaHXxCzbLSJspm',
                  nonce: 3,
                  amount: '0',
                  destination: 'KT1RxHZJCrFVuPQJWqhVLBZeZxm7SawHdHGL',
                  parameters: {
                    entrypoint: 'transfer',
                    value: [
                      {
                        prim: 'Pair',
                        args: [
                          { bytes: '0000bc82eedf570c81349226f937bed3d3485a2b080f' },
                          [
                            {
                              prim: 'Pair',
                              args: [
                                { bytes: '01728d89975f2119d0bcc6dee11eb7d627b0fe5dc400' },
                                { prim: 'Pair', args: [{ int: '1' }, { int: '5000000000' }] },
                              ],
                            },
                          ],
                        ],
                      },
                    ],
                  },
                  result: {
                    status: 'applied',
                    storage: {
                      prim: 'Pair',
                      args: [
                        { prim: 'Pair', args: [{ int: '20440' }, { int: '20441' }] },
                        { prim: 'Pair', args: [{ int: '20442' }, { int: '20443' }] },
                      ],
                    },
                    big_map_diff: [
                      {
                        action: 'update',
                        big_map: '20440',
                        key_hash: 'exprtqGiP8vxvoGE35foNVciCmRtuofNsZVinQfSE2SKdQdAvSTcBS',
                        key: {
                          prim: 'Pair',
                          args: [
                            { bytes: '0000bc82eedf570c81349226f937bed3d3485a2b080f' },
                            { int: '1' },
                          ],
                        },
                        value: { int: '5000000000' },
                      },
                      {
                        action: 'update',
                        big_map: '20440',
                        key_hash: 'exprv6HH2WDmykE9AQ5kmXbsZAbEHzr2Wy6Bkt5CCS9U9CEgiNdRJr',
                        key: {
                          prim: 'Pair',
                          args: [
                            { bytes: '01728d89975f2119d0bcc6dee11eb7d627b0fe5dc400' },
                            { int: '1' },
                          ],
                        },
                        value: { int: '3520044054386878' },
                      },
                    ],
                    consumed_gas: '5018',
                    consumed_milligas: '5017728',
                    storage_size: '48520',
                    lazy_storage_diff: [
                      { kind: 'big_map', id: '20443', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20442', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20441', diff: { action: 'update', updates: [] } },
                      {
                        kind: 'big_map',
                        id: '20440',
                        diff: {
                          action: 'update',
                          updates: [
                            {
                              key_hash: 'exprv6HH2WDmykE9AQ5kmXbsZAbEHzr2Wy6Bkt5CCS9U9CEgiNdRJr',
                              key: {
                                prim: 'Pair',
                                args: [
                                  { bytes: '01728d89975f2119d0bcc6dee11eb7d627b0fe5dc400' },
                                  { int: '1' },
                                ],
                              },
                              value: { int: '3520044054386878' },
                            },
                            {
                              key_hash: 'exprtqGiP8vxvoGE35foNVciCmRtuofNsZVinQfSE2SKdQdAvSTcBS',
                              key: {
                                prim: 'Pair',
                                args: [
                                  { bytes: '0000bc82eedf570c81349226f937bed3d3485a2b080f' },
                                  { int: '1' },
                                ],
                              },
                              value: { int: '5000000000' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'transaction',
                  source: 'KT1PrWB2PSwWNzbfpA9SJbUaHXxCzbLSJspm',
                  nonce: 4,
                  amount: '0',
                  destination: 'KT1K2U9q55iPwGJEFyEqfbL3AKhHX4f6UThT',
                  parameters: {
                    entrypoint: 'start_swap',
                    value: {
                      prim: 'Pair',
                      args: [
                        {
                          prim: 'Pair',
                          args: [
                            { bytes: '0000bc82eedf570c81349226f937bed3d3485a2b080f' },
                            { int: '0' },
                          ],
                        },
                        { prim: 'Pair', args: [{ int: '14161068' }, { prim: 'None' }] },
                      ],
                    },
                  },
                  result: {
                    status: 'applied',
                    storage: {
                      prim: 'Pair',
                      args: [
                        [
                          {
                            prim: 'Pair',
                            args: [
                              {
                                prim: 'Pair',
                                args: [
                                  {
                                    prim: 'Pair',
                                    args: [
                                      { prim: 'Pair', args: [{ int: '20832' }, { int: '20833' }] },
                                      { prim: 'Pair', args: [{ int: '20834' }, { int: '20835' }] },
                                    ],
                                  },
                                  { int: '20836' },
                                ],
                              },
                              {
                                prim: 'Pair',
                                args: [
                                  {
                                    prim: 'Some',
                                    args: [
                                      {
                                        prim: 'Pair',
                                        args: [
                                          {
                                            prim: 'Pair',
                                            args: [
                                              {
                                                prim: 'Pair',
                                                args: [
                                                  {
                                                    bytes:
                                                      '0000bc82eedf570c81349226f937bed3d3485a2b080f',
                                                  },
                                                  { int: '0' },
                                                ],
                                              },
                                              {
                                                prim: 'Pair',
                                                args: [{ int: '14161068' }, { prim: 'None' }],
                                              },
                                            ],
                                          },
                                          {
                                            prim: 'Pair',
                                            args: [
                                              { prim: 'None' },
                                              { prim: 'Right', args: [{ prim: 'Unit' }] },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  { int: '20837' },
                                ],
                              },
                            ],
                          },
                          { prim: 'Pair', args: [{ int: '2369921' }, { int: '976068754' }] },
                          { int: '1633368712' },
                          { int: '3520039054386878' },
                        ],
                        {
                          prim: 'Pair',
                          args: [
                            [
                              {
                                prim: 'Pair',
                                args: [
                                  { int: '9999515636866' },
                                  { int: '35198685566720594775323444348' },
                                ],
                              },
                              {
                                prim: 'Pair',
                                args: [
                                  { bytes: '01be8be8d6aa8aa77b26fcdfb58b2d3abc097ba74600' },
                                  { prim: 'Some', args: [{ int: '1' }] },
                                ],
                              },
                              { bytes: '01be8be8d6aa8aa77b26fcdfb58b2d3abc097ba74600' },
                              { prim: 'Some', args: [{ int: '0' }] },
                            ],
                            { bytes: '012582f9db72407f07e78f065db7965ff42c46248700' },
                          ],
                        },
                      ],
                    },
                    big_map_diff: [],
                    consumed_gas: '12571',
                    consumed_milligas: '12570775',
                    storage_size: '19279',
                    lazy_storage_diff: [
                      { kind: 'big_map', id: '20837', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20836', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20835', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20834', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20833', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20832', diff: { action: 'update', updates: [] } },
                    ],
                  },
                },
                {
                  kind: 'transaction',
                  source: 'KT1K2U9q55iPwGJEFyEqfbL3AKhHX4f6UThT',
                  nonce: 5,
                  amount: '0',
                  destination: 'KT1RxHZJCrFVuPQJWqhVLBZeZxm7SawHdHGL',
                  parameters: {
                    entrypoint: 'transfer',
                    value: [
                      {
                        prim: 'Pair',
                        args: [
                          { bytes: '01728d89975f2119d0bcc6dee11eb7d627b0fe5dc400' },
                          [
                            {
                              prim: 'Pair',
                              args: [
                                { bytes: '0000bc82eedf570c81349226f937bed3d3485a2b080f' },
                                { prim: 'Pair', args: [{ int: '1' }, { int: '0' }] },
                              ],
                            },
                          ],
                        ],
                      },
                    ],
                  },
                  result: {
                    status: 'applied',
                    storage: {
                      prim: 'Pair',
                      args: [
                        { prim: 'Pair', args: [{ int: '20440' }, { int: '20441' }] },
                        { prim: 'Pair', args: [{ int: '20442' }, { int: '20443' }] },
                      ],
                    },
                    big_map_diff: [
                      {
                        action: 'update',
                        big_map: '20440',
                        key_hash: 'exprtqGiP8vxvoGE35foNVciCmRtuofNsZVinQfSE2SKdQdAvSTcBS',
                        key: {
                          prim: 'Pair',
                          args: [
                            { bytes: '0000bc82eedf570c81349226f937bed3d3485a2b080f' },
                            { int: '1' },
                          ],
                        },
                        value: { int: '5000000000' },
                      },
                      {
                        action: 'update',
                        big_map: '20440',
                        key_hash: 'exprv6HH2WDmykE9AQ5kmXbsZAbEHzr2Wy6Bkt5CCS9U9CEgiNdRJr',
                        key: {
                          prim: 'Pair',
                          args: [
                            { bytes: '01728d89975f2119d0bcc6dee11eb7d627b0fe5dc400' },
                            { int: '1' },
                          ],
                        },
                        value: { int: '3520044054386878' },
                      },
                    ],
                    consumed_gas: '4759',
                    consumed_milligas: '4758619',
                    storage_size: '48520',
                    lazy_storage_diff: [
                      { kind: 'big_map', id: '20443', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20442', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20441', diff: { action: 'update', updates: [] } },
                      {
                        kind: 'big_map',
                        id: '20440',
                        diff: {
                          action: 'update',
                          updates: [
                            {
                              key_hash: 'exprv6HH2WDmykE9AQ5kmXbsZAbEHzr2Wy6Bkt5CCS9U9CEgiNdRJr',
                              key: {
                                prim: 'Pair',
                                args: [
                                  { bytes: '01728d89975f2119d0bcc6dee11eb7d627b0fe5dc400' },
                                  { int: '1' },
                                ],
                              },
                              value: { int: '3520044054386878' },
                            },
                            {
                              key_hash: 'exprtqGiP8vxvoGE35foNVciCmRtuofNsZVinQfSE2SKdQdAvSTcBS',
                              key: {
                                prim: 'Pair',
                                args: [
                                  { bytes: '0000bc82eedf570c81349226f937bed3d3485a2b080f' },
                                  { int: '1' },
                                ],
                              },
                              value: { int: '5000000000' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'transaction',
                  source: 'KT1K2U9q55iPwGJEFyEqfbL3AKhHX4f6UThT',
                  nonce: 6,
                  amount: '0',
                  destination: 'KT1RxHZJCrFVuPQJWqhVLBZeZxm7SawHdHGL',
                  parameters: {
                    entrypoint: 'transfer',
                    value: [
                      {
                        prim: 'Pair',
                        args: [
                          { bytes: '01728d89975f2119d0bcc6dee11eb7d627b0fe5dc400' },
                          [
                            {
                              prim: 'Pair',
                              args: [
                                { bytes: '0000bc82eedf570c81349226f937bed3d3485a2b080f' },
                                { prim: 'Pair', args: [{ int: '0' }, { int: '14161068' }] },
                              ],
                            },
                          ],
                        ],
                      },
                    ],
                  },
                  result: {
                    status: 'applied',
                    storage: {
                      prim: 'Pair',
                      args: [
                        { prim: 'Pair', args: [{ int: '20440' }, { int: '20441' }] },
                        { prim: 'Pair', args: [{ int: '20442' }, { int: '20443' }] },
                      ],
                    },
                    big_map_diff: [
                      {
                        action: 'update',
                        big_map: '20440',
                        key_hash: 'exprtsTQSSJpAVrr1qEA9LRMaNz7zpBH4bpmGGBM8N6JztetYSREov',
                        key: {
                          prim: 'Pair',
                          args: [
                            { bytes: '01728d89975f2119d0bcc6dee11eb7d627b0fe5dc400' },
                            { int: '0' },
                          ],
                        },
                        value: { int: '9999501475798' },
                      },
                      {
                        action: 'update',
                        big_map: '20440',
                        key_hash: 'expruhP7hUgjQpeNgzkjxgBt8Bz3bncenkYmC383MS2UYEsTMYXYaU',
                        key: {
                          prim: 'Pair',
                          args: [
                            { bytes: '0000bc82eedf570c81349226f937bed3d3485a2b080f' },
                            { int: '0' },
                          ],
                        },
                        value: { int: '14161068' },
                      },
                    ],
                    balance_updates: [
                      {
                        kind: 'contract',
                        contract: 'tz1cpnaaG6FkPAUcrsj45zhYYSPMvJnxyc59',
                        change: '-17500',
                        origin: 'block',
                      },
                    ],
                    consumed_gas: '4522',
                    consumed_milligas: '4521387',
                    storage_size: '48590',
                    paid_storage_size_diff: '70',
                    lazy_storage_diff: [
                      { kind: 'big_map', id: '20443', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20442', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20441', diff: { action: 'update', updates: [] } },
                      {
                        kind: 'big_map',
                        id: '20440',
                        diff: {
                          action: 'update',
                          updates: [
                            {
                              key_hash: 'expruhP7hUgjQpeNgzkjxgBt8Bz3bncenkYmC383MS2UYEsTMYXYaU',
                              key: {
                                prim: 'Pair',
                                args: [
                                  { bytes: '0000bc82eedf570c81349226f937bed3d3485a2b080f' },
                                  { int: '0' },
                                ],
                              },
                              value: { int: '14161068' },
                            },
                            {
                              key_hash: 'exprtsTQSSJpAVrr1qEA9LRMaNz7zpBH4bpmGGBM8N6JztetYSREov',
                              key: {
                                prim: 'Pair',
                                args: [
                                  { bytes: '01728d89975f2119d0bcc6dee11eb7d627b0fe5dc400' },
                                  { int: '0' },
                                ],
                              },
                              value: { int: '9999501475798' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'transaction',
                  source: 'KT1K2U9q55iPwGJEFyEqfbL3AKhHX4f6UThT',
                  nonce: 7,
                  amount: '0',
                  destination: 'KT1RxHZJCrFVuPQJWqhVLBZeZxm7SawHdHGL',
                  parameters: {
                    entrypoint: 'balance_of',
                    value: {
                      prim: 'Pair',
                      args: [
                        [
                          {
                            prim: 'Pair',
                            args: [
                              { bytes: '01728d89975f2119d0bcc6dee11eb7d627b0fe5dc400' },
                              { int: '1' },
                            ],
                          },
                        ],
                        {
                          bytes:
                            '01728d89975f2119d0bcc6dee11eb7d627b0fe5dc40062616c616e63655f63616c6c6261636b',
                        },
                      ],
                    },
                  },
                  result: {
                    status: 'applied',
                    storage: {
                      prim: 'Pair',
                      args: [
                        { prim: 'Pair', args: [{ int: '20440' }, { int: '20441' }] },
                        { prim: 'Pair', args: [{ int: '20442' }, { int: '20443' }] },
                      ],
                    },
                    big_map_diff: [],
                    consumed_gas: '5064',
                    consumed_milligas: '5063541',
                    storage_size: '48590',
                    lazy_storage_diff: [
                      { kind: 'big_map', id: '20443', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20442', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20441', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20440', diff: { action: 'update', updates: [] } },
                    ],
                  },
                },
                {
                  kind: 'transaction',
                  source: 'KT1RxHZJCrFVuPQJWqhVLBZeZxm7SawHdHGL',
                  nonce: 10,
                  amount: '0',
                  destination: 'KT1K2U9q55iPwGJEFyEqfbL3AKhHX4f6UThT',
                  parameters: {
                    entrypoint: 'balance_callback',
                    value: [
                      {
                        prim: 'Pair',
                        args: [
                          {
                            prim: 'Pair',
                            args: [
                              { bytes: '01728d89975f2119d0bcc6dee11eb7d627b0fe5dc400' },
                              { int: '1' },
                            ],
                          },
                          { int: '3520044054386878' },
                        ],
                      },
                    ],
                  },
                  result: {
                    status: 'applied',
                    storage: {
                      prim: 'Pair',
                      args: [
                        [
                          {
                            prim: 'Pair',
                            args: [
                              {
                                prim: 'Pair',
                                args: [
                                  {
                                    prim: 'Pair',
                                    args: [
                                      { prim: 'Pair', args: [{ int: '20832' }, { int: '20833' }] },
                                      { prim: 'Pair', args: [{ int: '20834' }, { int: '20835' }] },
                                    ],
                                  },
                                  { int: '20836' },
                                ],
                              },
                              {
                                prim: 'Pair',
                                args: [
                                  {
                                    prim: 'Some',
                                    args: [
                                      {
                                        prim: 'Pair',
                                        args: [
                                          {
                                            prim: 'Pair',
                                            args: [
                                              {
                                                prim: 'Pair',
                                                args: [
                                                  {
                                                    bytes:
                                                      '0000bc82eedf570c81349226f937bed3d3485a2b080f',
                                                  },
                                                  { int: '0' },
                                                ],
                                              },
                                              {
                                                prim: 'Pair',
                                                args: [
                                                  { int: '14161068' },
                                                  {
                                                    prim: 'Some',
                                                    args: [{ int: '3520044054386878' }],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                          {
                                            prim: 'Pair',
                                            args: [
                                              { prim: 'None' },
                                              {
                                                prim: 'Left',
                                                args: [{ prim: 'Left', args: [{ prim: 'Unit' }] }],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  { int: '20837' },
                                ],
                              },
                            ],
                          },
                          { prim: 'Pair', args: [{ int: '2369921' }, { int: '976068754' }] },
                          { int: '1633368712' },
                          { int: '3520039054386878' },
                        ],
                        {
                          prim: 'Pair',
                          args: [
                            [
                              {
                                prim: 'Pair',
                                args: [
                                  { int: '9999515636866' },
                                  { int: '35198685566720594775323444348' },
                                ],
                              },
                              {
                                prim: 'Pair',
                                args: [
                                  { bytes: '01be8be8d6aa8aa77b26fcdfb58b2d3abc097ba74600' },
                                  { prim: 'Some', args: [{ int: '1' }] },
                                ],
                              },
                              { bytes: '01be8be8d6aa8aa77b26fcdfb58b2d3abc097ba74600' },
                              { prim: 'Some', args: [{ int: '0' }] },
                            ],
                            { bytes: '012582f9db72407f07e78f065db7965ff42c46248700' },
                          ],
                        },
                      ],
                    },
                    big_map_diff: [],
                    consumed_gas: '7023',
                    consumed_milligas: '7022609',
                    storage_size: '19290',
                    lazy_storage_diff: [
                      { kind: 'big_map', id: '20837', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20836', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20835', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20834', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20833', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20832', diff: { action: 'update', updates: [] } },
                    ],
                  },
                },
                {
                  kind: 'transaction',
                  source: 'KT1K2U9q55iPwGJEFyEqfbL3AKhHX4f6UThT',
                  nonce: 8,
                  amount: '0',
                  destination: 'KT1RxHZJCrFVuPQJWqhVLBZeZxm7SawHdHGL',
                  parameters: {
                    entrypoint: 'balance_of',
                    value: {
                      prim: 'Pair',
                      args: [
                        [
                          {
                            prim: 'Pair',
                            args: [
                              { bytes: '01728d89975f2119d0bcc6dee11eb7d627b0fe5dc400' },
                              { int: '0' },
                            ],
                          },
                        ],
                        {
                          bytes:
                            '01728d89975f2119d0bcc6dee11eb7d627b0fe5dc40062616c616e63655f63616c6c6261636b',
                        },
                      ],
                    },
                  },
                  result: {
                    status: 'applied',
                    storage: {
                      prim: 'Pair',
                      args: [
                        { prim: 'Pair', args: [{ int: '20440' }, { int: '20441' }] },
                        { prim: 'Pair', args: [{ int: '20442' }, { int: '20443' }] },
                      ],
                    },
                    big_map_diff: [],
                    consumed_gas: '5064',
                    consumed_milligas: '5063529',
                    storage_size: '48590',
                    lazy_storage_diff: [
                      { kind: 'big_map', id: '20443', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20442', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20441', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20440', diff: { action: 'update', updates: [] } },
                    ],
                  },
                },
                {
                  kind: 'transaction',
                  source: 'KT1RxHZJCrFVuPQJWqhVLBZeZxm7SawHdHGL',
                  nonce: 11,
                  amount: '0',
                  destination: 'KT1K2U9q55iPwGJEFyEqfbL3AKhHX4f6UThT',
                  parameters: {
                    entrypoint: 'balance_callback',
                    value: [
                      {
                        prim: 'Pair',
                        args: [
                          {
                            prim: 'Pair',
                            args: [
                              { bytes: '01728d89975f2119d0bcc6dee11eb7d627b0fe5dc400' },
                              { int: '0' },
                            ],
                          },
                          { int: '9999501475798' },
                        ],
                      },
                    ],
                  },
                  result: {
                    status: 'applied',
                    storage: {
                      prim: 'Pair',
                      args: [
                        [
                          {
                            prim: 'Pair',
                            args: [
                              {
                                prim: 'Pair',
                                args: [
                                  {
                                    prim: 'Pair',
                                    args: [
                                      { prim: 'Pair', args: [{ int: '20832' }, { int: '20833' }] },
                                      { prim: 'Pair', args: [{ int: '20834' }, { int: '20835' }] },
                                    ],
                                  },
                                  { int: '20836' },
                                ],
                              },
                              {
                                prim: 'Pair',
                                args: [
                                  {
                                    prim: 'Some',
                                    args: [
                                      {
                                        prim: 'Pair',
                                        args: [
                                          {
                                            prim: 'Pair',
                                            args: [
                                              {
                                                prim: 'Pair',
                                                args: [
                                                  {
                                                    bytes:
                                                      '0000bc82eedf570c81349226f937bed3d3485a2b080f',
                                                  },
                                                  { int: '0' },
                                                ],
                                              },
                                              {
                                                prim: 'Pair',
                                                args: [
                                                  { int: '14161068' },
                                                  {
                                                    prim: 'Some',
                                                    args: [{ int: '3520044054386878' }],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                          {
                                            prim: 'Pair',
                                            args: [
                                              { prim: 'Some', args: [{ int: '9999501475798' }] },
                                              {
                                                prim: 'Left',
                                                args: [{ prim: 'Right', args: [{ prim: 'Unit' }] }],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  { int: '20837' },
                                ],
                              },
                            ],
                          },
                          { prim: 'Pair', args: [{ int: '2369921' }, { int: '976068754' }] },
                          { int: '1633368712' },
                          { int: '3520039054386878' },
                        ],
                        {
                          prim: 'Pair',
                          args: [
                            [
                              {
                                prim: 'Pair',
                                args: [
                                  { int: '9999515636866' },
                                  { int: '35198685566720594775323444348' },
                                ],
                              },
                              {
                                prim: 'Pair',
                                args: [
                                  { bytes: '01be8be8d6aa8aa77b26fcdfb58b2d3abc097ba74600' },
                                  { prim: 'Some', args: [{ int: '1' }] },
                                ],
                              },
                              { bytes: '01be8be8d6aa8aa77b26fcdfb58b2d3abc097ba74600' },
                              { prim: 'Some', args: [{ int: '0' }] },
                            ],
                            { bytes: '012582f9db72407f07e78f065db7965ff42c46248700' },
                          ],
                        },
                      ],
                    },
                    big_map_diff: [],
                    consumed_gas: '7025',
                    consumed_milligas: '7024325',
                    storage_size: '19298',
                    lazy_storage_diff: [
                      { kind: 'big_map', id: '20837', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20836', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20835', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20834', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20833', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20832', diff: { action: 'update', updates: [] } },
                    ],
                  },
                },
                {
                  kind: 'transaction',
                  source: 'KT1K2U9q55iPwGJEFyEqfbL3AKhHX4f6UThT',
                  nonce: 9,
                  amount: '0',
                  destination: 'KT1K2U9q55iPwGJEFyEqfbL3AKhHX4f6UThT',
                  parameters: {
                    entrypoint: 'finalize_action',
                    value: { prim: 'Right', args: [{ prim: 'Unit' }] },
                  },
                  result: {
                    status: 'applied',
                    storage: {
                      prim: 'Pair',
                      args: [
                        [
                          {
                            prim: 'Pair',
                            args: [
                              {
                                prim: 'Pair',
                                args: [
                                  {
                                    prim: 'Pair',
                                    args: [
                                      { prim: 'Pair', args: [{ int: '20832' }, { int: '20833' }] },
                                      { prim: 'Pair', args: [{ int: '20834' }, { int: '20835' }] },
                                    ],
                                  },
                                  { int: '20836' },
                                ],
                              },
                              { prim: 'Pair', args: [{ prim: 'None' }, { int: '20837' }] },
                            ],
                          },
                          { prim: 'Pair', args: [{ int: '2369927' }, { int: '976906563' }] },
                          { int: '1633371092' },
                          { int: '3520044054386878' },
                        ],
                        {
                          prim: 'Pair',
                          args: [
                            [
                              {
                                prim: 'Pair',
                                args: [
                                  { int: '9999501475798' },
                                  { int: '35198685566720594775323444348' },
                                ],
                              },
                              {
                                prim: 'Pair',
                                args: [
                                  { bytes: '01be8be8d6aa8aa77b26fcdfb58b2d3abc097ba74600' },
                                  { prim: 'Some', args: [{ int: '1' }] },
                                ],
                              },
                              { bytes: '01be8be8d6aa8aa77b26fcdfb58b2d3abc097ba74600' },
                              { prim: 'Some', args: [{ int: '0' }] },
                            ],
                            { bytes: '012582f9db72407f07e78f065db7965ff42c46248700' },
                          ],
                        },
                      ],
                    },
                    big_map_diff: [],
                    consumed_gas: '6962',
                    consumed_milligas: '6961817',
                    storage_size: '19227',
                    lazy_storage_diff: [
                      { kind: 'big_map', id: '20837', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20836', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20835', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20834', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20833', diff: { action: 'update', updates: [] } },
                      { kind: 'big_map', id: '20832', diff: { action: 'update', updates: [] } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'transaction',
            source: 'tz1cpnaaG6FkPAUcrsj45zhYYSPMvJnxyc59',
            fee: '12049',
            counter: '703829',
            gas_limit: '3392',
            storage_limit: '0',
            amount: '0',
            destination: 'KT1RxHZJCrFVuPQJWqhVLBZeZxm7SawHdHGL',
            parameters: {
              entrypoint: 'update_operators',
              value: [
                {
                  prim: 'Right',
                  args: [
                    {
                      prim: 'Pair',
                      args: [
                        { string: 'tz1cpnaaG6FkPAUcrsj45zhYYSPMvJnxyc59' },
                        {
                          prim: 'Pair',
                          args: [{ string: 'KT1PrWB2PSwWNzbfpA9SJbUaHXxCzbLSJspm' }, { int: '1' }],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            metadata: {
              balance_updates: [
                {
                  kind: 'contract',
                  contract: 'tz1cpnaaG6FkPAUcrsj45zhYYSPMvJnxyc59',
                  change: '-12049',
                  origin: 'block',
                },
                {
                  kind: 'freezer',
                  category: 'fees',
                  delegate: 'tz1RomaiWJV3NFDZWTMVR2aEeHknsn3iF5Gi',
                  cycle: 131,
                  change: '12049',
                  origin: 'block',
                },
              ],
              operation_result: {
                status: 'applied',
                storage: {
                  prim: 'Pair',
                  args: [
                    { prim: 'Pair', args: [{ int: '20440' }, { int: '20441' }] },
                    { prim: 'Pair', args: [{ int: '20442' }, { int: '20443' }] },
                  ],
                },
                big_map_diff: [
                  {
                    action: 'update',
                    big_map: '20442',
                    key_hash: 'exprtpmtn8bL4jrTW2AfMZJ9p2yx1k9xMkN5f7EWhxtUVPtvutxqNL',
                    key: {
                      prim: 'Pair',
                      args: [
                        { bytes: '0000bc82eedf570c81349226f937bed3d3485a2b080f' },
                        {
                          prim: 'Pair',
                          args: [
                            { bytes: '01a783b18821ce1f502c8a1c2fd9761ad21c1391d600' },
                            { int: '1' },
                          ],
                        },
                      ],
                    },
                  },
                ],
                consumed_gas: '3292',
                consumed_milligas: '3291138',
                storage_size: '48523',
                lazy_storage_diff: [
                  { kind: 'big_map', id: '20443', diff: { action: 'update', updates: [] } },
                  {
                    kind: 'big_map',
                    id: '20442',
                    diff: {
                      action: 'update',
                      updates: [
                        {
                          key_hash: 'exprtpmtn8bL4jrTW2AfMZJ9p2yx1k9xMkN5f7EWhxtUVPtvutxqNL',
                          key: {
                            prim: 'Pair',
                            args: [
                              { bytes: '0000bc82eedf570c81349226f937bed3d3485a2b080f' },
                              {
                                prim: 'Pair',
                                args: [
                                  { bytes: '01a783b18821ce1f502c8a1c2fd9761ad21c1391d600' },
                                  { int: '1' },
                                ],
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  { kind: 'big_map', id: '20441', diff: { action: 'update', updates: [] } },
                  { kind: 'big_map', id: '20440', diff: { action: 'update', updates: [] } },
                ],
              },
            },
          },
        ],
        signature:
          'siggVH9Kh81y4UraZqdPvH2zdP3RgjUSt2XvM2VDD9N5mGptMrF31GRhaKAxtk6xErHsxLqohMvudwvLkjsMg7TkfGrbwMdC',
      },
    ],
  ],
};
export const blockHash = 'BlockHash';
export const liveBlocks = [
  'BKiHeQzuKM5quBsgVL25UDFXKcZyaTt26AQUtUkbA4Vh3dAQY21',
  'BKiboc2xTLtbCXt6AWX2BpR4km41onVrLmhFSTjYUA2iWKBwSTH',
];
export const balance = new BigNumber(4138876344398);
export const storage = { prim: 'Pair', args: [{ int: '0' }, { int: '1' }] };
export const script = {
  code: [
    { prim: 'parameter', args: [] },
    { prim: 'storage', args: [] },
    { prim: 'code', args: [] },
  ],
  storage: { prim: 'Pair', args: [] },
};
export const contract = {
  balance: new BigNumber(765),
  script: {
    code: [],
    storage: { prim: 'Pair', args: [] },
  },
};

export const managerKey = 'edpkvP1NXoo8vhYbPSvXdy466EHoYWBpf6zmjghB2p3DwJPjbB5nsf';
export const delegate = 'tz1cjyja1TU6fiyiFav3mFAdnDsCReJ12hPD';
export const bigmapValue = { prim: 'Pair', args: [[], { int: '100' }] };
export const delegates = {
  deactivated: false,
  balance: new BigNumber('5821087107868'),
  frozen_balance: new BigNumber('1682643263470'),
  staking_balance: new BigNumber('5792534034676'),
  delegated_contracts: ['tz2ApgXezUaJKaY49nxEYbMjsjnkAz2mTiFC'],
  delegated_balance: new BigNumber('12714439280'),
  grace_period: 131,
  voting_power: 747,
};
export const constants = {
  proof_of_work_nonce_size: 8,
  nonce_length: 32,
  max_anon_ops_per_block: 132,
  max_operation_data_length: 32768,
  max_proposals_per_delegate: 20,
  preserved_cycles: 3,
  blocks_per_cycle: 4096,
  blocks_per_commitment: 32,
  blocks_per_roll_snapshot: 256,
  blocks_per_voting_period: 20480,
  time_between_blocks: [new BigNumber(30), new BigNumber(20)],
  endorsers_per_block: 256,
  hard_gas_limit_per_operation: new BigNumber(1040000),
  hard_gas_limit_per_block: new BigNumber(5200000),
  proof_of_work_threshold: new BigNumber(70368744177663),
  tokens_per_roll: new BigNumber(8000000000),
  michelson_maximum_type_size: 1000,
  seed_nonce_revelation_tip: new BigNumber(125000),
  origination_size: 257,
  block_security_deposit: new BigNumber(640000000),
  endorsement_security_deposit: new BigNumber(2500000),
  baking_reward_per_endorsement: [new BigNumber(78125), new BigNumber(11719)],
  endorsement_reward: [new BigNumber(78125), new BigNumber(52083)],
  cost_per_byte: new BigNumber(250),
  hard_storage_limit_per_operation: new BigNumber(60000),
  quorum_min: 2000,
  quorum_max: 7000,
  min_proposal_quorum: 500,
  initial_endorsers: 192,
  delay_per_missing_endorsement: new BigNumber(4),
  minimal_block_delay: new BigNumber(15),
  liquidity_baking_subsidy: new BigNumber(2500000),
  liquidity_baking_sunset_level: 2032928,
  liquidity_baking_escape_ema_threshold: 1000000,
};
export const blockHeader = {
  protocol: 'PtGRANADsDU8R9daYKAgWnQYAJ64omN1o3KMGVCykShA97vQbvV',
  chain_id: 'NetXz969SFaFn8k',
  hash: 'BMZXDPn8kKMCSXX1ZfpkCHBuSeXkwqbEp3MJtEwNB21TNVC3Gsp',
  level: 516500,
  proto: 2,
  predecessor: 'BM4FhgGT16ikghoVoz1WoG5z2pmo24GC9sTrfMk5UB4KEnzjNTu',
  timestamp: '2021-09-27T20:41:55Z',
  validation_pass: 4,
  operations_hash: 'LLoZRW4irfmyGwY5ufakDd52aA1P6bVhn3zpjBbQxdjPvwjeEaDkK',
  fitness: ['01', '000000000007e193'],
  context: 'CoWX5BdtfTGKmmwpwhF9cpU6SqBmP5MqostAPP6b3oZp94PG9V2S',
  priority: 0,
  proof_of_work_nonce: '36055190bec80200',
  liquidity_baking_escape_vote: false,
  signature:
    'sigXwcYckn43nA9uqFKKTqFbkiyhBdKfRd8mbCWHnk4kFqis7unT4VJozBrT7f1pVZNUnTPwHYBqarCdVTRajj5bhWg4qGSF',
};

export const bakingRights = [
  {
    level: 516501,
    delegate: 'tz1VWasoyFGAWZt5K2qZRzP3cWzv3z7MMhP8',
    priority: 0,
    estimated_time: '2021-09-27T20:42:10Z',
  },
];

export const blockMetadata = {
  protocol: 'PtGRANADsDU8R9daYKAgWnQYAJ64omN1o3KMGVCykShA97vQbvV',
  next_protocol: 'PtGRANADsDU8R9daYKAgWnQYAJ64omN1o3KMGVCykShA97vQbvV',
  test_chain_status: { status: 'not_running' },
  max_operations_ttl: 120,
  max_operation_data_length: 32768,
  max_block_header_length: 239,
  max_operation_list_length: [
    { max_size: 4194304, max_op: 2048 },
    { max_size: 32768 },
    { max_size: 135168, max_op: 132 },
    { max_size: 524288 },
  ],
  baker: 'tz1aWXP237BLwNHJcCD4b3DutCevhqq2T1Z9',
  level_info: {
    level: 516500,
    level_position: 516499,
    cycle: 127,
    cycle_position: 403,
    expected_commitment: false,
  },
  voting_period_info: {
    voting_period: { index: 25, kind: 'proposal', start_position: 512001 },
    position: 4498,
    remaining: 15981,
  },
  nonce_hash: null,
  consumed_gas: '0',
  deactivated: [],
  balance_updates: [
    {
      kind: 'contract',
      contract: 'tz1aWXP237BLwNHJcCD4b3DutCevhqq2T1Z9',
      change: '-640000000',
      origin: 'block',
    },
    {
      kind: 'freezer',
      category: 'deposits',
      delegate: 'tz1aWXP237BLwNHJcCD4b3DutCevhqq2T1Z9',
      cycle: 127,
      change: '640000000',
      origin: 'block',
    },
    {
      kind: 'freezer',
      category: 'rewards',
      delegate: 'tz1aWXP237BLwNHJcCD4b3DutCevhqq2T1Z9',
      cycle: 127,
      change: '16484375',
      origin: 'block',
    },
  ],
  liquidity_baking_escape_ema: 243180,
  implicit_operations_results: [
    {
      kind: 'transaction',
      storage: [Array],
      balance_updates: [Array],
      consumed_gas: '2118',
      consumed_milligas: '2117300',
      storage_size: '4636',
    },
  ],
};
export const endorsingRights = [
  {
    level: 516500,
    delegate: 'tz3WXYtyDUNL91qfiCJtVUX746QpNv5i5ve5',
    slots: [12, 37, 80, 120, 130, 206, 209, 219, 229],
    estimated_time: '2021-09-27T20:41:55Z',
  },
];
export const ballotList = [];
export const ballots = { yay: 0, nay: 0, pass: 0 };
export const currentPeriodKind = {
  voting_period: { index: 25, kind: 'proposal', start_position: 512001 },
  position: 4498,
  remaining: 15981,
};
export const currentProposal = null;
export const currentQuorum = 5500;
export const votesListing = [{ pkh: 'tz3WXYtyDUNL91qfiCJtVUX746QpNv5i5ve5', rolls: 399 }];
export const porposals = [];
export const entryPoints = {
  entrypoints: { main: { prim: 'pair', args: [] }, default: { prim: 'unit' } },
};
export const chainId = 'NetXz969SFaFn8k';
export const packData = {
  gas: 'unaccounted',
  packed: '050a000000160000b24ac1e1759565d5c9b69af8450ce7ea3d1ee64c',
};
export const currentPeriod = {
  voting_period: { index: 25, kind: 'proposal', start_position: 512001 },
  position: 4498,
  remaining: 15981,
};
export const successorPeriod = {
  voting_period: { index: 25, kind: 'proposal', start_position: 512001 },
  position: 4539,
  remaining: 15940,
};

export const protocols = {
  protocol: 'PtHangz2aRngywmSRGGvrcTyMbbdpWdpFKuS4uMWxg2RaH9i1qx',
  next_protocol: 'PtHangz2aRngywmSRGGvrcTyMbbdpWdpFKuS4uMWxg2RaH9i1qx',
};
