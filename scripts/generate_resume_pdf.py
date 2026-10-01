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
PUBLIC_PDF = ROOT / "public" / "Carlos_Castro_Resume_2026.pdf"
OUTPUT_PDF = ROOT / "output" / "pdf" / "Carlos_Castro_Resume_2026.pdf"


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
            "Operations Builder | Location Management | Workflow Systems",
            s["title"],
        ),
        para(
            "Austin, Texas (open to San Francisco) | los124506@gmail.com | (956) 251-0708 | "
            "linkedin.com/in/carlos-castro-4a79a4323 | github.com/CarlosCastroWrk",
            s["contact"],
        ),
    ]

    story += section("Professional Summary", s["section"])
    story.append(
        para(
            "Business Administration and Marketing senior with hands-on experience leading field operations, supporting "
            "location management, and building software around real operational workflows. Combines frontline execution, "
            "team coordination, process improvement, customer-facing operations, and AI-assisted development to identify "
            "bottlenecks and translate them into practical systems.",
            s["body"],
        )
    )

    story += section("Core Skills", s["section"])
    story.append(
        para(
            "Location management, business operations, field operations, workflow design, process improvement, quality "
            "control, team coordination, SOPs, stakeholder communication, product discovery, systems thinking, AI "
            "implementation, process automation, React, TypeScript, Vite, Supabase, Git/GitHub, Vercel, SQL/API "
            "fundamentals, English/Spanish.",
            s["body_tight"],
        )
    )

    story += section("Selected Implementations", s["section"])
    implementation_blocks = [
        (
            "TurnOS",
            [
                "Mobile-first workflow system built around real student-housing Turn work",
                "Unit and issue tracking, crew assignments, follow-up, daily logs, reporting, and exports",
                "Built and field-tested from firsthand operational pain points",
            ],
        ),
        (
            "CleanDay",
            [
                "Residential cleaning business in Austin in development",
                "Developing tools for scheduling, crew coordination, and customer follow-up",
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
            "Washaroo - Location Management & Business Operations",
            "2026-Present",
            "Support day-to-day management of an East Austin service-business location while working directly alongside ownership on operations and business decision-making. Develop hands-on experience across employee workflows, service execution, customer experience, sales procedures, inventory, SOPs, cash reconciliation, and operational reporting.",
        ),
        (
            "Property Doctor Services - Turn Supervisor",
            "Summer 2026",
            "Supervised paint and cleaning operations during a high-volume student-housing Turn spanning approximately 567 beds and 166 units. Coordinated crews, unit priorities, inspections, callbacks, and property-management communication, then built and field-tested TurnOS from firsthand operational pain points.",
        ),
        (
            "BallerTV - Site Lead, Live Event Operations",
            "2024-Present",
            "Lead tournament streaming operations across multiple courts and venues, coordinating equipment readiness, connectivity, scoring workflows, and live technical troubleshooting. Serve as an operational point of contact for tournament staff, coaches, parents, and event stakeholders.",
        ),
    ]
    for role, date, desc in experiences:
        story.append(KeepTogether([para(role, s["role"]), para(date, s["meta"]), para(desc, s["body_tight"])]))

    story += section("Education & Leadership", s["section"])
    story.append(
        para(
            "Concordia University Texas - B.B.A. Business Administration & Marketing, expected December 2026 (online)",
            s["body_tight"],
        )
    )
    story.append(
        para(
            "Bryant & Stratton College - Associate of Business Administration, GPA 3.7, Honors Society",
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
