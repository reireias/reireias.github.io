type ExperienceHighlight = {
  title: string
  description: string
  outcomes: string[]
  tags: string[]
}

export type WorkExperience = {
  organization: string
  period: string
  position: string
  summary: string
  scale?: string[]
  highlights: ExperienceHighlight[]
}

const experiences: WorkExperience[] = [
  {
    organization: 'メドピア株式会社',
    period: '2019 — Present',
    position: 'プリンシパルエンジニア / SRE / セキュリティエンジニア',
    summary:
      'プラットフォームSREとセキュリティ領域をリードしています。個別サービスの支援から全社共通基盤、技術ロードマップ、開発組織の仕組みづくりまで、組織を横断して取り組んでいます。',
    scale: ['約20サービス', '40超のAWSアカウント', '4〜5名のSREチーム'],
    highlights: [
      {
        title: 'AI開発基盤とガバナンス',
        description:
          'Claude Enterpriseの全社導入におけるセキュリティ設計と、AIエージェントを安全に活用するための実行基盤を担当しました。',
        outcomes: [
          'MCPの統制方針、個人情報の取り扱い、非エンジニア向けガードレールを設計',
          '社内規約を組み込んだプラグインとMCP連携を開発し、チームへ展開',
          'AI利用のコスト・セッション・トークンを可視化する本番基盤を構築',
        ],
        tags: ['Claude Code', 'MCP', 'Amazon Managed Grafana', 'ADOT'],
      },
      {
        title: 'Platform SREと全社標準化',
        description:
          'サービスごとの運用を支援しながら、複数のプロジェクトへ再利用できる基盤と標準をコードとして整備しました。',
        outcomes: [
          'Terraform CloudからGitHub Actionsへの移行を主導し、コストと開発体験を改善',
          'GitHub Actionsの権限を45リポジトリへ一斉適用',
          '30件以上のPRを通じてBranch ProtectionからRulesetへの移行を完遂',
        ],
        tags: ['AWS', 'Terraform', 'GitHub Actions', 'CI/CD'],
      },
      {
        title: 'セキュリティ体制とサプライチェーン防御',
        description:
          '個別の脆弱性対応にとどまらず、全AWSアカウントの統制と、攻撃を予防する継続的な仕組みを構築しました。',
        outcomes: [
          'AWS Organizations、CloudTrail、Security Hubを用いた一元的な統制を構築',
          'セキュリティKPIと月次レビュー、中長期ロードマップを策定',
          '依存固定、Renovate、gitleaks、zizmorなどの対策を30以上のリポジトリへ展開',
        ],
        tags: ['Cloud Security', 'Governance', 'Supply Chain', 'Security KPI'],
      },
      {
        title: 'クラウドコストと信頼性の改善',
        description:
          'コストを単発で削減するのではなく、各開発チームが継続的に判断・改善できる運用へ変えることを重視しました。',
        outcomes: [
          'ARM化やS3ストレージクラス移行など、10〜20の削減観点を横断的に調査・提案',
          '削減ノウハウをドキュメント化し、SRE以外も改善できる環境を整備',
          'Cost Anomaly Detectionの全AWSアカウント導入とコスト算出の自動化を推進',
        ],
        tags: ['FinOps', 'AWS', 'Observability', 'Automation'],
      },
      {
        title: 'アーキテクチャ設計と組織への展開',
        description:
          'インフラだけに閉じず、アプリケーション要件と運用を俯瞰して技術選定・設計・実装を進めています。',
        outcomes: [
          'AI電話の内製化に向け、LiveKitを用いたSIP・メディア分離構成を設計・構築',
          'Terraform勉強会やゲームデーを通じ、サービスチームが自律的に運用できる体制を整備',
          'SRE・セキュリティの中長期ロードマップを策定し、優先度と判断軸を組織へ共有',
        ],
        tags: ['Architecture', 'LiveKit', 'Enablement', 'Technical Strategy'],
      },
    ],
  },
  {
    organization: '富士ゼロックス株式会社',
    period: '2013 — 2019',
    position: 'ソリューション開発部 / 開発リーダー・インフラチームリーダー',
    summary:
      'BtoB SaaSのバックエンド・フロントエンド開発とインフラを担当しました。その後、AWS移行とAWSを利用した新規サービスの立ち上げを経験し、インフラチームリーダーを務めました。',
    highlights: [
      {
        title: 'アプリケーション開発からAWS基盤まで',
        description:
          'アプリケーションとインフラの両方に携わり、AWSへの移行、新規サービスの立ち上げへ担当領域を広げました。',
        outcomes: [
          'バックエンド・フロントエンドのアプリケーション開発を担当',
          'サービスを支えるインフラを担当',
          '既存サービスのAWS移行を実施',
          'AWSを利用した新規サービスの立ち上げと、インフラチームのリードを担当',
        ],
        tags: ['AWS', 'Java', 'C#', 'JavaScript', 'Ruby on Rails'],
      },
    ],
  },
]

export default experiences
