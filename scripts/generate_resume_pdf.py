from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
PUBLIC_PDF = ROOT / "public" / "Carlos_Castro_AI_Operator_Resume_2026.pdf"
OUTPUT_PDF = ROOT / "output" / "pdf" / "Carlos_Castro_AI_Operator_Resume_2026.pdf"


INK = colors.HexColor("#10201f")
GRAPHITE = colors.HexColor("#273331")
SEA = colors.HexColor("#0f766e")
LINE = colors.HexColor("#dbe5e0")


def styles():
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "Name",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=24,
            leading=27,
            textColor=INK,
            spaceAfter=2,
        ),
        "title": ParagraphStyle(
            "Title",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10.5,
            leading=13,
            textColor=SEA,
            spaceAfter=4,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.4,
            leading=10.5,
            textColor=GRAPHITE,
            spaceAfter=8,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10.7,
            leading=13,
            textColor=INK,
            spaceBefore=8,
            spaceAfter=4,
            alignment=TA_LEFT,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.9,
            leading=11.3,
            textColor=GRAPHITE,
            spaceAfter=4,
        ),
        "body_tight": ParagraphStyle(
            "BodyTight",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.55,
            leading=10.7,
            textColor=GRAPHITE,
            spaceAfter=2,
        ),
        "role": ParagraphStyle(
            "Role",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9.4,
            leading=11.5,
            textColor=INK,
            spaceBefore=3,
            spaceAfter=1,
        ),
        "meta": ParagraphStyle(
            "Meta",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=8.5,
            leading=10.5,
            textColor=SEA,
            spaceAfter=2,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.9,
            leading=9.6,
            textColor=GRAPHITE,
            leftIndent=0,
            firstLineIndent=0,
            spaceAfter=1,
        ),
    }


def para(text, style):
    return Paragraph(text.replace("&", "&amp;"), style)


def section(title, style):
    return [
        Spacer(1, 2),
        HRFlowable(width="100%", thickness=0.65, color=LINE, spaceBefore=1, spaceAfter=4),
        Paragraph(title.upper(), style),
    ]


def bullets(items, style):
    return [Paragraph(f"- {item}".replace("&", "&amp;"), style) for item in items]


def build_story():
    s = styles()
    story = [
        para("Carlos Castro", s["name"]),
        para(
            "AI-Native Operator | Workflow Systems Builder | Customer Success & Operations",
            s["title"],
        ),
        para(
            "Austin, Texas | los124506@gmail.com | (956) 251-0708 | "
            "linkedin.com/in/carlos-castro-4a79a4323 | github.com/CarlosCastroWrk",
            s["contact"],
        ),
    ]

    story += section("Professional Summary", s["section"])
    story.append(
        para(
            "AI-native operator and workflow systems builder focused on understanding how people work, "
            "identifying operational bottlenecks, and translating messy workflows into structured systems. "
            "Business Administration and Marketing senior at Concordia University Texas, graduating December 2026. "
            "Building Boardroom/Cortex, an AI-native operations platform and business memory layer that serves as "
            "a reusable foundation for industry-specific operational implementations. Focused on helping real "
            "businesses adopt AI in practical ways through workflow design, customer success, implementation, "
            "documentation, and operational execution.",
            s["body"],
        )
    )

    story += section("Core Skills", s["section"])
    story.append(
        para(
            "AI implementation, workflow design, business operations, customer success, product support, "
            "implementation support, product discovery, process improvement, documentation, stakeholder "
            "communication, prompt engineering, Claude Code, ChatGPT, OpenAI Codex, Cursor, GitHub, Supabase, "
            "Vercel, SQL/API fundamentals, bilingual English/Spanish.",
            s["body_tight"],
        )
    )

    story += section("Platform", s["section"])
    story.append(para("Boardroom / Cortex OS", s["role"]))
    story.append(para("AI-Native Operations Platform", s["meta"]))
    story.append(
        para(
            "Building an AI-native operating system and business memory layer that serves as the foundation "
            "for industry-specific operational implementations. Designed to help organizations organize "
            "knowledge, customer activity, workflows, decisions, and execution while adapting to the unique "
            "needs of different industries.",
            s["body"],
        )
    )

    story += section("Selected Implementations", s["section"])
    implementation_blocks = [
        (
            "Mavrik Aircraft Services",
            [
                "Aviation implementation of Boardroom/Cortex",
                "Customer intake",
                "Lead management",
                "Scheduling and quoting",
                "Service tracking",
                "Customer communication",
            ],
        ),
        (
            "Automotive Sales Operating System",
            [
                "Automotive implementation of Boardroom/Cortex",
                "Prospect management",
                "Follow-up workflows",
                "Appointment tracking",
                "Customer relationship management",
                "Pipeline visibility",
            ],
        ),
        (
            "Water Restoration Operations Dashboard",
            [
                "Built for my older brother's water mitigation business after studying existing workflows",
                "Centralized jobs, customers, photos, and follow-ups",
                "Improved visibility into active projects and operational execution",
            ],
        ),
    ]
    implementation_cells = []
    for name, items in implementation_blocks:
        implementation_cells.append([para(name, s["role"]), *bullets(items, s["bullet"])])
    story.append(
        Table(
            [implementation_cells],
            colWidths=[(letter[0] - 0.96 * inch) / 3] * 3,
            style=TableStyle(
                [
                    ("VALIGN", (0, 0), (-1, -1), "TOP"),
                    ("BOX", (0, 0), (-1, -1), 0.45, LINE),
                    ("INNERGRID", (0, 0), (-1, -1), 0.45, LINE),
                    ("LEFTPADDING", (0, 0), (-1, -1), 7),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 7),
                    ("TOPPADDING", (0, 0), (-1, -1), 5),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
                    ("BACKGROUND", (0, 0), (-1, -1), colors.white),
                ]
            ),
        )
    )

    story += section("Professional Experience", s["section"])
    experiences = [
        (
            "BallerTV - Site Lead, Live Event Operations",
            "2024-Present",
            "Lead tournament streaming operations across multiple venues, coordinate equipment readiness, troubleshoot technical issues, and serve as a primary point of contact for coaches, parents, tournament staff, and event stakeholders.",
        ),
        (
            "H-E-B - Cooking Connections Partner",
            "2025-Present",
            "Conduct live product demonstrations, engage customers, communicate product value, handle questions, and execute customer-facing operations independently in a high-traffic retail environment.",
        ),
        (
            "Vamos Coffee - Barista",
            "2024",
            "Delivered customer service in a fast-paced environment while supporting daily service operations, communication, order accuracy, and repeat customer relationships.",
        ),
    ]
    for role, date, desc in experiences:
        story.append(KeepTogether([para(role, s["role"]), para(date, s["meta"]), para(desc, s["body_tight"])]))

    story += section("Education & Leadership", s["section"])
    story.append(
        para(
            "Concordia University Texas - B.B.A. Business Administration & Marketing, expected December 2026",
            s["body_tight"],
        )
    )
    story.append(
        para(
            "Bryant & Stratton College - Associate of Business Administration, GPA 3.7, Honors Society",
            s["body_tight"],
        )
    )
    story.append(
        para(
            "College Basketball Athlete, 2022-2025 | Cross Mountain Church Student Leader, 2023-2024",
            s["body_tight"],
        )
    )

    return story


def generate(path):
    path.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(path),
        pagesize=letter,
        rightMargin=0.48 * inch,
        leftMargin=0.48 * inch,
        topMargin=0.42 * inch,
        bottomMargin=0.42 * inch,
        title="Carlos Castro AI Operator Resume",
        author="Carlos Castro",
    )
    doc.build(build_story())


if __name__ == "__main__":
    generate(PUBLIC_PDF)
    generate(OUTPUT_PDF)
    print(PUBLIC_PDF)
    print(OUTPUT_PDF)
